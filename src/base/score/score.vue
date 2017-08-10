<template>
    <div class="score">
        <div class="score-list"></div>
        <div class="no-tips" v-if="false">
            <p>暂无评分！</p>
        </div>
    </div>
</template>
<script type="text/javascript">
     export default{
        props:{
            stars : String,
            default:''
        },
        mounted(){
            setTimeout(()=>{
                this.handleStars();
            },50);
        },
        methods:{
            handleStars(){

            }
        }
     }
</script>