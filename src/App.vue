<template>
  <div id="app">
    <!-- 这里的hasLoad监听的是 每个路由组件在初始化加载数据完后通过(this.$emit('hasLoad'))回传到这里的 -->
	<transition name="slide">
    <keep-alive>
        <router-view @hasLoad="hasLoad"></router-view>
    </keep-alive>
	</transition>
  </div>
</template>

<script>

export default {
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
    
  }
}
</script>

<style>
</style>
