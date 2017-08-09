<template>
    <div class="home">
        <Scroll :data="list" class="list-content">
          <ul class="list-w">
            <li @click="add" v-for="it in list">{{it.name}}</li>
          </ul>
        </Scroll>
    </div>
</template>
<script type="text/javascript">
    import Scroll from 'base/scroll/scroll'
    export default{
      components: {
        Scroll
      },
      data(){
        return {
          list:[{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'},{name:'张安'}]
        }
      },
      methods:{
        add(){
          let ret = [];
          for(let i =0; i<10;i++){
            ret.push({name:'李四'+i});
          }
          this.list = this.list.concat(ret);
        }
      }
    }
</script>
<style lang="stylus">
  .home{
    position: fixed;
    width: 100%;
    top: 80px;
    bottom: 50px;
    left: 0;
    right: 0;
    .list-content{
      height:100%;
      overflow: hidden;
      .list-w{
        li{
          text-indent:20px;
          line-height:35px;
          border-bottom: 1px solid #000;
        }
      }
    }
  }

</style>