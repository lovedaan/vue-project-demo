<template>
    <div class="me">
        <div class="me-header">
            <div class="img">
                <img src="~common/images/4.png" width="80" alt="" />
            </div>
            <h3 class="text">小书童</h3>
        </div>
        <div class="me-content">
            <img class="qrcode" src="~common/images/qrcode.jpg" alt="" />
            <p>欢迎关注我的微信订阅号！</p>
        </div>
    </div>
</template>
<script type="text/javascript">
     export default{
        components:{
        },
        computed:{
        },
        data(){
            return {
            }
        },
        mounted (){
        },
        methods:{
            fetchData(){

            },
            loadMore(){
            }
        }
     }
</script>
<style lang="stylus">
    .me{
        .me-header{
            box-sizing: border-box;
            width: 100%;
            height: 150px;
            background: linear-gradient(#42bd56,#9ad57f);
            padding: 35px 50px 35px 20px;
            display: flex;
            align-items: center;
            .text{
                padding-left:20px;
                color:#fff;
                font-size:24px;
                font-weight:normal;
            }
        }
        .me-content{
            display: flex;
            padding-top:80px;
            flex-direction:column;
            align-items:center;
            .qrcode{
                display: block;
                width: 200px;
                margin-bottom:30px;
            }
        }
    }
</style>