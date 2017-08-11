<template>
  <div id="app">
    <keep-alive><router-view @hasLoad="hasLoad"></router-view></keep-alive>
    <FooterView></FooterView>
  </div>
</template>

<script>
import FooterView from 'components/footer'
export default {
  name: 'app',
  components:{
    FooterView
  },
  methods:{
    hasLoad(){
        console.log(123);
    }
  }
}
</script>

<style>
</style>
