<template>
    <div class="usBox">
        <searchBar></searchBar>
        <div class="header">
            <div class="header-line"></div>
            <span class="header-text">北美票房榜</span>
        </div>
        <div class="usBox-content">
            <ul class="usBox-list">
                <li @click="goDetail(movie.subject.id)" class="list-item" v-for="(movie,index) in list">
                    <img class="usBox-bg" :src="movie.subject.images.large" alt="" />
                    <p>{{movie.subject.title}}</p>
                    <Score :stars="movie.subject.rating.stars" :average="movie.subject.rating.average"></Score>
                </li>
            </ul>
        </div>
        <Loading v-show="!list.length"></Loading>
    </div>
</template>
<script type="text/javascript">
     import Score from 'base/score/score'
     import {getMovieUsBox} from 'api/getMovies'
     import Loading from 'base/loading/loading'
     import searchBar from 'base/search-bar/search-bar'
     export default{
        components:{
            Score,
            Loading,
            searchBar
        },
        data(){
            return {
                list :[]
            }
        },
        mounted(){
            this.fetchData();
        },
        methods:{
            fetchData(){
                var that = this;
                getMovieUsBox().then((res)=>{
                    //console.log(res);
                    that.list = res.subjects;
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
        }
     }
</script>
<style lang="stylus">
    .usBox{
        .header{
            height: 50px;
            position: relative;
            overflow: hidden;
            .header-line{
                position: absolute;
                width: 50%;
                height: 1px;
                background:#000;
                left: 50%;
                top: 50%;
                transform:translate(-50%,-50%);
            }
            .header-text{
                position: absolute;
                left: 50%;
                top: 50%;
                transform:translate(-50%,-50%);
                padding: 2px 6px;
                background:#fff;
            }
        }
        .usBox-content{
            padding: 12px 0 0 12px;
            .usBox-list{
                width: 100%;
                overflow: hidden;
                display: flex;
                flex-wrap:wrap;
                padding-bottom:51px;
                .list-item{
                    width: 33.33%;
                    box-sizing: border-box;
                    border-right: 10px solid #fff;
                    margin-bottom:10px;
                    .usBox-bg{
                        width: 100%;
                        height: 38vw;
                    }
                    p{
                        padding: 5px 0;
                        width: 100%;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
</style>