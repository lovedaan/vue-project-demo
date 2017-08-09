<template>
    <div class="news">
        <Scroll :data="list" class="news-content">
            <ul class="news-list">
                <li>
                    <div class="left">
                        <img src="" height="120" width="120" alt="" />
                    </div>
                    <div class="right">
                        <div class="box">
                            <h3>88908890889088908890889088908890</h3>
                            <p>导演：后打开</p>
                            <p>主演：后打开</p>
                            <p>类型：后打开</p>
                            <p>年份：2017</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="loaing-wrapper">

            </div>
        </Scroll>
    </div>
</template>
<script type="text/javascript">
    import {getTop250} from 'api/getMovies'
    import Scroll from 'base/scroll/scroll'

     export default{
        components:{
            Scroll
        },
        data(){
            return {
                list:[1,2,3]
            }
        },
        mounted (){
            //this.fetchData();
        },
        methods:{
            fetchData(){
                getTop250(0,15).then((res)=>{
                    console.log(res);
                });
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
                    width:120px;
                    flex:0 0 120px;
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