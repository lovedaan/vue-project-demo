<template>
    <div class="news">
        <Scroll :data="list" class="news-content" :isPullUp="pullUp" @scrollToEnd="loadMore">
            <ul class="news-list">
                <li v-for="(it,index) in list">
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
</template>
<script type="text/javascript">
    import Scroll from 'base/scroll/scroll'
    import Score from 'base/score/score'
    import Loading from 'base/loading/loading'
    import {mapGetters} from 'vuex'
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
                page:0
            }
        },
        mounted (){
            //console.log(this.getFooter);
            //this.fetchData();
        },
        methods:{
            fetchData(){

            },
            loadMore(){
                //console.log('滚动到底部了');
            }
        }
     }
</script>
<style lang="stylus">
    .news{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 50px;
        width: 100%;
        .news-content{
            height:100%;
            overflow: hidden;
        }
        .news-list{
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