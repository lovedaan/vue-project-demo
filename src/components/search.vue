<template>
    <div class="search-wrap">
        <div class="search-header">
            <div class="input">
                <i class="search_icon"></i>
                <input v-model="query" class="search_text" type="text" placeholder="搜索电影/影人" />
            </div>
            <a href="javascript:;" class="search_back" @click="back">取消</a>
        </div>
        <div class="search-hot" v-if="!query">
            <searchHotView @selectItem="onTapHot"></searchHotView>
        </div>
        <div class="search-result" v-else>
            <searchReault :query="query"></searchReault>
        </div>
    </div>
</template>
<script type="text/javascript">
    import searchHotView from 'base/search-hot/search-hot'
    import searchReault from 'base/search-result/search-result'
    export default {
        components:{
            searchHotView,
            searchReault
        },
        data(){
            return {
                query : ''
            }
        },
        methods:{
            onTapHot(query){
                this.query = query;
            },
            back(){
                this.$router.back();
            }
        },
        watch:{
            $route(to,from){
                if(to.path == '/search' && from.path != '/movie-detail'){
                    this.query = '';
                }
            }
        }
    }
</script>
<style lang="stylus">
    .search-wrap{
        height: 100%;
        .search-header{
            display: flex;
            padding: 10px;
            background:#42bd56;
            .input{
                flex:1;
                position: relative;
                .search_icon{
                    position: absolute;
                    left: 16px;
                    top: 12px;
                    width: 16px;
                    height: 16px;
                    background:url('~common/images/search.png') no-repeat;
                    background-size:cover;
                }
                .search_text{
                    display: block;
                    width: 100%;
                    border:none;
                    background:#fff;
                    height: 40px;
                    line-height:40px;
                    font-size:14px;
                    padding-left:35px;
                    box-sizing:border-box;
                    border-radius:8px;
                    outline:none;
                }
            }
            .search_back{
                flex:0 0 40px;
                width: 40px;
                text-align: center;
                line-height:40px;
                padding-left:5px;
                color:#fff;
            }
        }
        .search-hot,.search-result{
            position: fixed;
            left: 0;
            top: 60px;
            bottom: 0;
            width: 100%;
        }

    }
</style>