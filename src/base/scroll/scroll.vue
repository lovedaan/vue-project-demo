<template>
    <div class="scroll" ref="scroll">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
    import BSroll from 'better-scroll'
    export default{
        props:{
            data:{
                type:Array,
                default:[]
            },
            isPullUp:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            setTimeout(()=>{
                this.initScroll();
            },20);
        },
        methods:{
            initScroll(){
                this.scroll = new BSroll(this.$refs.scroll,{
                    scrollY:true,
                    scrollX:false,
                    click:true,
                    probeType:3
                });

                //是否监听滚动到底部
                if(this.isPullUp){
                    this.scroll.on('scrollEnd',(pos)=>{
                        let maxY = this.scroll.maxScrollY; //固定的值
                        let posY = pos.y; //滚动距离，越来越大
                        if(posY < maxY + 25){
                            //console.log('滚动到底部了');
                            this.$emit('scrollToEnd');
                        }
                        //console.log('最大的滚动距离：'+maxY);
                        //console.log('当前的滚动值：'+posY);
                    });
                }
            },
            refresh(){
                this.scroll && this.scroll.refresh();
            }
        },
        watch:{
            data(){
                setTimeout(()=>{
                    this.refresh();
                },20);
            }
        }
    }
</script>
<style lang="stylus">
</style>