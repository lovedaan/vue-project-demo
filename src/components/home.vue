<template>
    <div class="home-wrap">
       <searchBar></searchBar>
       <div class="home">
          <Scroll ref="scrollContent" :data="allData" class="list-content">
              <div class="content">
                  <Slider :data="bannerData" :autoPlay="autoPlay" v-if="bannerData.length">
                      <div class="slider-item" v-for="it in bannerData"><img :src="it.images.large" alt=""></div>
                  </Slider>
                  <scrollOri title="正在热映" v-if="allData.length" :data="allData[2].subjects"></scrollOri>
                  <scrollOri title="即将上映" v-if="allData.length" :data="allData[1].subjects"></scrollOri>
                  <scrollOri title="top250" v-if="allData.length" :data="allData[0].subjects"></scrollOri>
              </div>
          </Scroll>
          <div class="loading-content" v-show="!allData.length">
              <Loading class="loading-wrap"></Loading>
          </div>
      </div>
    </div>

</template>
<script type="text/javascript">
    import Scroll from 'base/scroll/scroll'
    import Loading from 'base/loading/loading'
    import searchBar from 'base/search-bar/search-bar'
    import Slider from 'base/slider/slider'
    import scrollOri from 'base/scroll-ori/scroll-ori'
    import {getMovies} from 'api/getMovies'
    export default{
      components: {
        Scroll,
        Loading,
        searchBar,
        Slider,
        scrollOri
      },
      data(){
        return {
          allData:[],
          bannerData:[],
          autoPlay:true
        }
      },
      mounted(){
        this.fetchData();
      },
      methods:{
        fetchData(){
          Promise.all([getMovies(0,10,'top250'),getMovies(0,10,'coming_soon'),getMovies(0,10,'in_theaters')]).then((res)=>{
            //console.log(res[2]);
            this.allData = res;
            this.bannerData = res[2].subjects.slice(0,5);
            //console.log(this.$refs.scrollContent);
            setTimeout(()=>{
              this.$refs.scrollContent.refresh();
            },1000);
          });
        },
        add(){

        }
      }
    }
</script>
<style lang="stylus">
  .home-wrap{
    .home{
      position: fixed;
      width: 100%;
      top: 65px;
      bottom: 50px;
      left: 0;
      right: 0;
      .list-content{
        height:100%;
        overflow: hidden;
        .content{
          .slider-item{
            width: 100%;
            height: 240px;
            overflow: hidden;
            float: left;
            img{
              width: 100%;
              border:none;
              vertical-align:top;
            }
          }
          .list-w{
            li{
              text-indent:20px;
              line-height:35px;
              border-bottom: 1px solid #000;
            }
          }
        }
      }
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
    }
  }
</style>