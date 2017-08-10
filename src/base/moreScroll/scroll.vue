<template>
    <div class="more-scroll">
        <Scroll class="more-scroll-content" :data="data">
            <slot></slot>
        </Scroll>
    </div>
</template>
<script type="text/javascript">
     import Scroll from 'base/scroll/scroll'
     import Loading from 'base/loading/loading'
     export default{
        components:{
            Scroll,
            Loading
        },
        props:{
            data:{
                type:Array,
                default:[]
            },
            page:{
                type:Number,
                default:0
            },
            count:{
                type:Number,
                default:15
            }
        }
     }
</script>
<style lang="stylus">
    .more-scroll-content{
        height:100%;
        overflow: hidden;
    }
</style>