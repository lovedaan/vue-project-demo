<template>
    <div class="movie-detail">
        <div class="header">
            <a href="javascript:;" class="back" @click="back">
                <i class="back_icon"></i>
                返回
            </a>
            <h3>电影详情</h3>
        </div>
        <div v-if="images">
            <div class="detail-header">
               <div class="detail-header-con">
                    <img :src="images" class="header-bg" alt="">
                    <div class="header-wrap">
                        <h2>{{objData.title}}</h2>
                        <p class="city-time">{{countries}} . {{objData.year}}</p>
                        <p class="info">
                            <span><i>{{objData.collect_count}}</i>人喜欢</span>
                            <span><i>{{objData.reviews_count}}</i>条评论</span>
                        </p>
                    </div>
               </div>
               <img :src="images" width="80" height="120" class="movie-bg" alt="" />
            </div>
            <div class="movie-info">
                <div class="movie-title">{{objData.original_title}}</div>
                <div class="movie-info-con">
                    <div><span class="item-sub">评分</span> <Score v-if="images" :stars="objData.rating.stars" :average="objData.rating.average"></Score></div>
                    <p><span class="item-sub">导演</span> <span v-for="(dir,index) in objData.directors">{{dir.name}} <i v-if="index != objData.directors.length - 1">、</i></span></p>
                    <p><span class="item-sub">影人</span> <span v-for="(cast,index) in objData.casts">{{cast.name}} <i v-if="index != objData.casts.length - 1">/</i></span></p>
                    <p><span class="item-sub">类型</span> <span>{{objData.genres}}</span></p>
                </div>
            </div>
            <div class="movie-summary">
                <div class="summary-title">剧情简介</div>
                <p>{{objData.summary}}</p>
            </div>
            <div class="movie-film">
                <div class="film-title">影人</div>
                <scrollOri :isTitle="isTitle" title="正在热映" v-if="films.length" :data="films"></scrollOri>
            </div>
        </div>
        <div class="loading-content" v-show="!images">
              <Loading class="loading-wrap"></Loading>
        </div>
    </div>
</template>
<script type="text/javascript">
    import {getMovieDetail} from 'api/getMovies'
    import Loading from 'base/loading/loading'
    import scrollOri from 'base/scroll-ori/scroll-ori'
   import Score from 'base/score/score'
    export default{
        components:{
            Loading,
            Score,
            scrollOri
        },
        data(){
            return {
                id:'',
                objData:{},
                images:'',
                countries:'',
                films:[],
                isTitle:false
            }
        },
        mounted(){
            this.id = this.$route.query.id;

            this.fetchData();
        },
        methods:{
            fetchData(){
                this.objData = {};
                getMovieDetail(this.id).then((res)=>{
                    //console.log(res);
                    this.images = res.images.large;
                    this.countries = res.countries[0];
                    this.objData =res;
                    this.objData.genres = this.objData.genres.toString();
                    let filmsList = res.casts;
                    let ret = [];
                    for(let i = 0; i<filmsList.length;i++){
                        if(filmsList[i].avatars){
                            ret.push({
                                images:{
                                    small:filmsList[i].avatars.large
                                },
                                title:filmsList[i].name
                            });
                        }
                    }
                    this.films = ret;
                    //console.log(JSON.stringify(ret));
                    //console.log(this.objData.images.large);
                });
            },
            back(){
                this.$router.back();
            }
        },
        watch:{
            $route(to,from){
                if(to.query.id && to.query.id != this.id){
                    this.objData = {};
                    this.images = '';
                    this.countries = '';
                    this.films = [];
                    this.id = to.query.id;
                    this.fetchData();
                }
            }
        }
    }
</script>
<style lang="stylus">
    .movie-detail{
        height: 100%;
        .loading-content{
            position: fixed;
            left: 0;
            top:0;
            width: 100%;
            height: 100%;
            z-index:10;
            .loading-wrap{
              position: absolute;
              left:50%;
              top:50%;
              transform:translate(-50%,-50%);
            }
        }
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
        .detail-header{
            padding: 0 15px;
            position: relative;
            height: 240px;
            .detail-header-con{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 240px;
                overflow: hidden;
                .header-wrap{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index:10;
                    padding:10px 18px;
                    box-sizing:border-box;
                    display: flex;
                    flex-direction:column;
                    justify-content:space-around;
                    font-family:'微软雅黑';
                    h2{
                        font-size:30px;
                        color:#fff;
                    }
                    .city-time{
                        font-size:16px;
                        color:#fff;
                    }
                    .info{
                        color:#666666;
                        font-size:14px;
                        span:first-child{
                            margin-right: 10px;
                        }
                        i{
                            color:#DF3C55;
                        }
                    }
                }
            }
            .header-bg{
                position: absolute;
                width: 100%;
                left: 0;
                top: 0;
                filter:blur(20px);
            }
            .movie-bg{
                position: absolute;
                right: 20px;
                bottom:-60px;
            }
        }
        .movie-info{
            padding: 25px 20px;
            border-bottom: 1px solid #D9D9D9;
            .movie-title{
                color:#666666;
                font-size:20px;
                margin-bottom:24px;
            }
            .movie-info-con{
                font-size:16px;
                color:#666666;
                .item-sub{
                    margin-right:16px;
                    color:#999999;
                }
                >div{
                    display: flex;
                    margin-bottom:12px;
                }
                p{
                    margin-bottom:12px;

                }
            }
        }
        .movie-summary{
             padding: 25px 20px;
            border-bottom: 1px solid #D9D9D9;
            font-size:14px;
            color:#737373;
            .summary-title{
                color:#999999;
                margin-top:10px;
                margin-bottom:18px;
            }
            p{
                line-height:26px;
            }
        }
        .movie-film{
            padding: 25px 20px 10px;
            .film-title{
                color:#999999;
                margin-bottom:18px;
            }
        }
    }
</style>