<template>
    <div class="search-bar">
        <img class="search-logo" src="./douban-logo.png" height="45" width="45" alt="">
        <div class="search-bar-box" @click="goSearch">
            <span>
                <i class="serach-icon"></i>
                电影/影人/标签
            </span>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
       methods:{
            goSearch(){
                this.$router.push('/search');
                //console.log('去到搜索的页面');
            }
       }
    }
</script>
<style lang="stylus">
    .search-bar{
        padding: 10px;
        display: flex;
        .search-logo{
            flex: 0 0 45px;
            padding-right:12px;
        }
        .search-bar-box{
            flex:1;
            height: 45px;
            background:#eee;
            border-radius:8px;
            text-align: center;
            line-height:45px;
            color:#888;
            .serach-icon{
                display: inline-block;
                width: 16px;
                height: 16px;
                background:url(./search.png) no-repeat;
                background-size:cover;
                margin-right:4px;
                vertical-align:middle;
            }
        }
    }
</style>