<template>
    <div class="scroll-infeed">
        <div class="item-title" v-show="isTitle">
            <h3 class="item-text">
                <i class="item-line-left"></i>
                {{title}}
                <i class="item-line-right"></i>
            </h3>
            <a href="javascript:;" class="item-more" @click="selectMore(title)">
                查看更多<i class="more-icon"></i>
            </a>
        </div>
        <div class="item-scroll">
            <div class="item-scroll-wrapper" ref="scrollWrapper">
                <ul class="list" ref="list">
                    <li v-for="(item,index) in data" @click="selectItem(item.id)">
                        <a href="javascript:;">
                            <img v-lazy="title=='北美票房榜'?item.subject.images.small:item.images.small" alt="" />
                            <span class="name">{{title=='北美票房榜'?item.subject.title:item.title}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
     import BScroll from 'better-scroll'
     export default{
        props:{
            title:{
                type:String,
                default:''
            },
            data:{
                type:Array,
                default:[]
            },
            isTitle:{
                type:Boolean,
                default:true
            }
        },
        mounted(){
            setTimeout(()=>{
                this._setLiWidth();
                this._initScroll();
            },20);
        },
        methods:{
            selectMore(title){
                this.$router.push({
                    path:'movie-list',
                    query:{
                        type:title
                    }
                });
                //this.$emit('selectMore',title);
            },
            selectItem(id){
                if(id){
                    this.$router.push({
                        path:'movie-detail',
                        query:{
                           id:id
                        }
                    });
                }
            },
            _setLiWidth(){
                let innerW = this.$refs.scrollWrapper.clientWidth;
                let w = innerW/3.6;
                let child = this.$refs.list.children;
                for(var i = 0; i<child.length;i++){
                    child[i].style.width = `${w}px`;
                    child[i].style.height = `${w*1.8}px`;
                }
                this.$refs.list.style.width = child.length * (w+10) + 'px';
                this.$refs.list.style.height = child[0].clientHeight  + 'px';

            },
            _initScroll(){
                if(!this.$refs.scrollWrapper){
                    return;
                }
                this.scroll = new BScroll(this.$refs.scrollWrapper,{
                    scrollX:true,
                    scrollY:true,
                    probeType:1,
                    click:true
                });
            }
        },
        watch:{
            data(){
                setTimeout(()=>{
                    this.scroll&&this.scroll.refresh();
                },20);
            }
        }
     }
</script>
<style lang="stylus">
    .scroll-infeed{
        .item-title{
            padding:13px 10px;
            position: relative;
            background:#f3f3f3;
            .item-text{
                text-align: center;
                font-weight:normal;
                font-size:15px;
                color:#3f3f3f;
                i{
                    display:inline-block;
                    width: 13px;
                    height: 13px;
                    vertical-align:middle;
                    &.item-line-left{
                        background:url(left_line.png) no-repeat;
                        background-size: cover;
                        margin-right:4px;
                    }
                    &.item-line-right{
                        background:url(right_line.png) no-repeat;
                        background-size: cover;
                        margin-left:4px;
                    }
                }
            }
            .item-more{
                position: absolute;
                right: 5px;
                top: 14px;
                color: #6dca49;
                padding-right: 13px;
                .more-icon{
                    position: absolute;
                    right: 0;
                    top: 1px;
                    width:10px;
                    height: 18px;
                    background:url(arrow_right_icon.png) no-repeat;
                    background-size: cover;
                }
            }
        }
        .item-scroll{
            padding:10px 0 10px 10px;
            .list{
                li{
                    float: left;
                    margin-right:10px;
                    a{
                        display:block;
                        width: 100%;
                        text-align: center;
                        img{
                            width: 100%;
                            height: 40vw;
                        }
                        .name{
                            display:block;
                            text-align:left;
                            margin-left:4px;
                            margin-top:4px;
                            font-size:12px;
                        }
                    }
                }
            }
        }
    }
</style>