<template>
  <div id="app">
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
import FooterView from 'components/footer'
export default {
  name: 'app',
  components:{
    FooterView
  }
}
</script>

<style>
</style>
