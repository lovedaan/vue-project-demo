<template>
    <div class="pic">
        <h3>我是图片</h3>
        <Stars :stars="num" :average="average"></Stars>
    </div>
</template>
<script type="text/javascript">
     import Stars from 'base/score/score'
     export default{
        components:{
            Stars
        },
        data(){
            return {
                num:'30',
                average:'7.6'
            }
        }
     }
</script>