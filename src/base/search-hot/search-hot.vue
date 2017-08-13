<template>
    <div class="search-hot-wrap">
        <div class="search-hot-item">
            <span @click="select(it)" v-for="it in item1">{{it}}</span>
        </div>
        <div class="search-hot-item">
            <span @click="select(it)" v-for="it in item2">{{it}}</span>
        </div>
        <div class="search-hot-item">
            <span @click="select(it)" v-for="it in item3">{{it}}</span>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                item1:['经典','豆瓣高分','冷门佳片 '],
                item2:['剧情','爱情','喜剧','科幻','动作','悬疑','治愈','青春','文艺'],
                item3:['欧美','日本','韩国']
            }
        },
        methods:{
            select(query){
                this.$emit('selectItem',query);
            }
        }
    }
</script>
<style lang="stylus">
    .search-hot-wrap{
        padding: 0 20px 20px;
        .search-hot-item{
            display: flex;
            flex-wrap:wrap;
            padding:20px 0 5px;
            border-bottom: 0.5px solid #ccc;
            &:last-child{
                border-bottom: 0;
            }
            span{
                padding:6px 10px;
                color:#42bd56;
                border-radius:6px;
                border: 1px solid #42bd56;
                font-size:14px;
                margin-right:12px;
                margin-bottom:15px;
            }
        }
    }
</style>