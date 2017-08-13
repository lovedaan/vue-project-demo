<template>
  <div id="app">
    <!-- 这里的hasLoad监听的是 每个路由组件在初始化加载数据完后通过(this.$emit('hasLoad'))回传到这里的 -->
    <keep-alive>
        <router-view @hasLoad="hasLoad"></router-view>
    </keep-alive>
    <FooterView v-if="isShowFooter"></FooterView>
  </div>
</template>

<script>
import FooterView from 'components/footer'
export default {
  name: 'app',
  components:{
    FooterView
  },
  data(){
    return{
      isShowFooter:true
    }
  },
  computed:{
  },
  mounted(){

  },
  methods:{
    hasLoad(){
        //console.log(123);
    }
  },
  watch:{
    $route(to,from){
      if(to.path == '/movie-list' || to.path == '/movie-detail' || to.path == '/search'){
        this.isShowFooter = false;
      }else{
        this.isShowFooter = true;
      }
    }
  }
}
</script>

<style>
</style>
