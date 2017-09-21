<template>
    <div class="footer">
        <ul class="footer-list">
            <router-link tag="li" :to="{name:'home'}"><a href="javascript:;">热映</a></router-link>
            <router-link tag="li" :to="{name:'usBox'}"><a href="javascript:;">排行</a></router-link>
            <router-link tag="li" :to="{name:'me'}"><a href="javascript:;">我的</a></router-link>
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
        z-index:10;
        .footer-list{
            display: flex;
            li{
                flex:1;
                height:50px;
                text-align: center;
                line-height:50px;
                font-size:14px;
                border-right: 1px solid #ccc;
                background:#fff;
                &.active{
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