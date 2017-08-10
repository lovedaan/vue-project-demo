<template>
    <div class="pic">
        <h3>我是图片</h3>
        <Stars :stars="num"></Stars>
    </div>
</template>
<script type="text/javascript">
     import Stars from 'base/stars/stars'
     export default{
        components:{
            Stars
        },
        data(){
            return {
                num:'30'
            }
        }
     }
</script>