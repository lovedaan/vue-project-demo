<template>
    <div class="search-result-wrap">
        <Scroll :data="list" :isPullUp="pullUp" @scrollToEnd="loadMore" class="search-result-con">
            <ul class="movie-list-box">
                <li v-for="(it,index) in list" @click="goDetail(it.id)">
                    <div class="left">
                        <img v-lazy="it.images.large" height="120" width="80" alt="" />
                    </div>
                    <div class="right">
                        <div class="box">
                            <h3>{{it.title}}</h3>
                            <!-- <div>
                                <Score :stars="it.rating.stars" :average="it.rating.average"></Score>
                            </div> -->
                            <p>导演：<span v-for="(dir,index) in it.directors">{{dir.name}} <i v-if="index != it.directors.length - 1">、</i></span></p>
                            <p>主演：<span v-for="(names,index) in it.casts">{{names.name}} <i v-if="index != it.casts.length - 1">、</i></span></p>
                            <p>{{it.collect_count}}人 看过</p>
                        </div>
                    </div>
                </li>
                <div class="loaing-wrapper">
                    <LoadingMore  v-if="isLoad"></LoadingMore>
                    <p v-else>无更多数据！</p>
                </div>
            </ul>
        </Scroll>
    </div>
</template>
<script type="text/javascript">
    import Scroll from 'base/scroll/scroll'
    import LoadingMore from 'base/loading-more/loading-more'
    import {getMovieSearch} from 'api/getMovies'
    const COUNT = 18;
    export default {
        components:{
            Scroll,
            LoadingMore
        },
        props:{
            query :{
                type:String,
                default:''
            }
        },
        data(){
            return {
                list:[],
                pullUp:true,
                isLoad:false,
                page:0
            }
        },
        mounted(){
            this.fetchData();
        },
        methods:{
            fetchData(){
                this.isLoad = true;
                this.list = [];
                getMovieSearch(this.page*COUNT,COUNT,this.query).then((res)=>{
                    //console.log(res);
                    if(res.subjects.length == 0  ){
                        this.isLoad = false;
                        return;
                    }else if(res.subjects.length < COUNT){
                        this.list = res.subjects;
                        this.isLoad = false;
                        return;
                    }
                    this.list = res.subjects;
                });
            },
            loadMore(){
                console.log('滚动到底部了');

                if(!this.isLoad){
                    return;
                }
                this.page++;

                this.isLoad = true;
                getMovieSearch(this.page*COUNT,COUNT,this.query).then((res)=>{
                    if(res.subjects.length == 0){
                        this.isLoad = false;
                        return;
                    }

                    this.list = this.list.concat(res.subjects);
                    //console.log(res.subjects);
                });
            },
            goDetail(id){
                this.$router.push({
                    path:'/movie-detail',
                    query:{
                        id:id
                    }
                });
            }
        },
        watch:{
            query(){
                setTimeout(()=>{
                    this.fetchData();
                },50);
            }
        }
    }
</script>
<style lang="stylus">
    .search-result-wrap{
        height: 100%;
        .search-result-con{
            height: 100%;
            overflow: hidden;
            .movie-list-box{
                .loaing-wrapper{
                    p{
                        text-align center;
                        font-size:14px;
                        color:#333;
                        line-height:49px;
                    }
                }
                li{
                    display: flex;
                    border-bottom: 1px solid #000;
                    position: relative;
                    overflow: hidden;
                    padding:10px;
                    &:last-child{
                        border-bottom: 0;
                    }
                    .left{
                        width:80px;
                        flex:0 0 80px;
                        padding-right:10px;
                        overflow: hidden;
                        img{
                            border:0;
                            vertical-align:top;
                        }
                    }
                    .right{
                        flex:1;
                        box-sizing:border-box;
                        line-height: 20px;
                        overflow: hidden;
                        font-size: 14px;
                        .box{
                            height:100%;
                            display: flex;
                            flex-direction:column;
                            justify-content:space-between;
                             h3,p{
                                width:95%;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
        }
    }
</style>