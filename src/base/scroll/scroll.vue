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