<template>
    <div class="movie-list">
        <div class="header">
            <a href="javascript:;" class="back" @click="back">
                <i class="back_icon"></i>
                返回
            </a>
            <h3>{{title}}</h3>
        </div>
        <div class="scroll-list">
            <Scroll :data="list" class="movie-content" :isPullUp="pullUp" @scrollToEnd="loadMore">
                <ul class="movie-list-box">
                    <li v-for="(it,index) in list" @click="goDetail(it.id)">
                        <div class="left">
                            <img v-lazy="it.images.large" height="120" width="80" alt="" />
                        </div>
                        <div class="right">
                            <div class="box">
                                <h3>{{it.title}}</h3>
                                <div>
                                    <Score :stars="it.rating.stars" :average="it.rating.average"></Score>
                                </div>
                                <p>导演：<span v-for="(dir,index) in it.directors">{{dir.name}} <i v-if="index != it.directors.length - 1">、</i></span></p>
                                <p>主演：<span v-for="(names,index) in it.casts">{{names.name}} <i v-if="index != it.casts.length - 1">、</i></span></p>
                                <p>{{it.collect_count}}人 看过</p>
                            </div>
                        </div>
                    </li>
                    <div class="loaing-wrapper">
                        <Loading  v-if="isLoad"></Loading>
                        <p v-else>无更多数据！</p>
                    </div>
                </ul>
            </Scroll>
        </div>
    </div>
</template>
<script type="text/javascript">
    import {getMovies} from 'api/getMovies'
    import Scroll from 'base/scroll/scroll'
    import Score from 'base/score/score'
    import Loading from 'base/loading/loading'
    import {mapMutations} from 'vuex'
    const COUNT = 18;
     export default{
        components:{
            Scroll,
            Loading,
            Score
        },
        computed:{
        },
        data(){
            return {
                list:[],
                pullUp:true,
                isLoad:false,
                page:0,
                title:'正在热映',
                type:'in_theaters'
            }
        },
        mounted (){
            this.title = this.$route.query.type;
            switch(this.title){
                case '正在热映':
                    this.type = 'in_theaters';
                    break;
                case '即将上映':
                    this.type = 'coming_soon';
                    break;
                case 'top250':
                    this.type = 'top250';
                    break;
            }
            //console.log(this.getFooter);
            this.fetchData();
        },
        methods:{
            fetchData(){
                this.isLoad = true;
                getMovies(this.page*COUNT,COUNT,this.type).then((res)=>{
                    if(res.subjects.length == 0){
                        this.isLoad = false;
                        return;
                    }
                    this.$emit('hasLoad');
                    this.list = res.subjects;
                    //console.log(res.subjects);
                });
            },
            loadMore(){
                //console.log('滚动到底部了');

                if(!this.isLoad){
                    return;
                }
                this.page++;

                this.isLoad = true;
                getMovies(this.page*COUNT,COUNT,this.type).then((res)=>{
                    if(res.subjects.length == 0){
                        this.isLoad = false;
                        return;
                    }

                    this.list = this.list.concat(res.subjects);
                    //console.log(res.subjects);
                });
            },
            back(){
                this.$router.back();
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
            $route(to,from){
                if(to.query.type && to.query.type != this.title){
                    this.list = [];
                    this.page = 0;
                    this.title = to.query.type;
                    switch(this.title){
                        case '正在热映':
                            this.type = 'in_theaters';
                            break;
                        case '即将上映':
                            this.type = 'coming_soon';
                            break;
                        case 'top250':
                            this.type = 'top250';
                            break;
                    }

                    this.fetchData();
                }
            }
        }
     }
</script>
<style lang="stylus">
    .movie-list{
        width: 100%;
        height: 100%;
        .header{
            height: 49px;
            text-align: center;
            position: relative;
            background:#405F80;
            color:#fff;
            .back{
                position: absolute;
                left: 0;
                top:0;
                width: 50px;
                height: 50px;
                text-align: center;
                line-height:50px;
                padding-left:20px;
                color:#fff;
                .back_icon{
                    position: absolute;
                    left: 15px;
                    top:17px;
                    width: 10px;
                    height: 18px;
                    background:url('~common/images/arrow_right_icon.png') no-repeat;
                    background-size: cover;
                }
            }
            h3{
                font-weight:normal;
                line-height:50px;
            }
        }
        .scroll-list{
            position: fixed;
            left: 0;
            top: 50px;
            bottom: 0;
            width: 100%;
            z-index:80;
            .movie-content{
                position: absolute;
                left: 0;
                top:0;
                width: 100%;
                height:100%;
                overflow: hidden;
                z-index:80;
            }
        }
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
</style>