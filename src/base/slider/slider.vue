<template>
    <div class="slider" ref="slider">
        <div class="slider-wrap" ref="sliderWrap">
            <slot></slot>
        </div>
        <div class="slider-dot">
            <span v-for="(it,index) in dots" :class="{active:index===nowPages}"></span>
        </div>
    </div>
</template>
<script type="text/javascript">
     import BScroll from 'better-scroll'
     export default{
        props:{
            data:{
                type:Array,
                default:[]
            },
            loop:{
                type:Boolean,
                default:true
            },
            click:{
                type:Boolean,
                default:true
            },
            autoPlay:{
                type:Boolean,
                default:false
            },
            interval:{
                type:Number,
                default:3000
            }
        },
        data(){
            return {
                dots:[],
                nowPages:0
            }
        },
        mounted(){
            setTimeout(()=>{
                this.setWidth();
                this._initScroll();
                if(this.autoPlay){
                    this.next();
                }
            },50);
        },
        methods:{
            setWidth(){
                let windowViewWidth = window.innerWidth;
                let childrens = this.$refs.sliderWrap.children;
                let w = 0;
                for(let i = 0; i<childrens.length;i++){
                    this.dots.push(i);
                    childrens[i].style.width = windowViewWidth + 'px';
                    w+= windowViewWidth;
                }

                //当需要无缝滑动的时候，前后会添加多两个节点，所以总宽度要添加多两倍屏幕宽度
                if(this.loop){
                    w+= windowViewWidth*2;
                }

                this.$refs.sliderWrap.style.width = w+'px';
                this.$refs.sliderWrap.style.height = childrens[0].offsetHeight+'px';

            },
            _initScroll(){
                this.slide = new BScroll(this.$refs.slider,{
                    scrollY:false,
                    scrollX:true,
                    click:this.click,
                    snap:true,
                    snapLoop:this.loop,
                    snapSpeed:400,
                    swipeTime:this.interval,
                    probeType:1,
                    momentum:false
                });

                this.slide.on('scrollEnd',()=>{
                    //获取当前返回的是第几页
                    let pageIndex = this.slide.getCurrentPage().pageX;
                    this.nowPages = this.loop?pageIndex - 1:pageIndex;
                    //console.log(pageIndex);
                    if(this.autoPlay){
                        clearInterval(this.timer);
                        this.next();
                    }
                });


            },
            next(){
                let page = this.nowPages+1;

                if(this.loop){
                    //如果是无缝滑动，因为前后各加了一个节点，所以滑动page要加一
                    page += 1;
                }
                this.timer = setTimeout(()=>{
                    this.slide && this.slide.goToPage(page,0,400);
                },this.interval);

            }
        },
        watch:{
            data(){
                setTimeout(()=>{
                    this.setWidth();
                    this._initScroll();
                },50);
            }
        }
     }
</script>
<style lang="stylus">
    .slider{
        position: relative;
        width: 100%;
        .slider-dot{
            position: absolute;
            left: 50%;
            bottom: 10px;
            width: 100px;
            height: 12px;
            transform:translateX(-50%);
            display: flex;
            justify-content:space-between;
            span{
                display: inline-block;
                width: 10px;
                height:10px;
                background:rgba(255, 255, 255, 0.8);
                border-radius:5px;
                &.active{
                    width: 20px;
                    background:yellowgreen;
                }
            }
        }
    }
</style>