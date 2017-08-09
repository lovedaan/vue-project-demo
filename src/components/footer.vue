<template>
    <div class="footer">
        <ul class="footer-list">
            <router-link to="home" tag="li" class="cur">主页</router-link>
            <router-link to="pic" tag="li">图片</router-link>
            <router-link to="news" tag="li">新闻</router-link>
        </ul>
    </div>
</template>
<style lang="stylus">
    .footer{
        position: fixed;
        left: 0;
        width: 100%;
        height: 50px;
        bottom: 0;
        border-top: 1px solid #000;
        .footer-list{
            display: flex;
            li{
                flex:1;
                height:50px;
                text-align: center;
                line-height:50px;
                font-size:14px;
                border-right: 1px solid #ccc;
                &.router-link-active{
                    background:yellowgreen;
                    color:#fff;
                }
                &:last-child{
                    border-right: 0;
                }
                a{
                    display: block;
                }
            }
        }

    }
</style>