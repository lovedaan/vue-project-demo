<template>
    <div class="score">
        <div class="score-list" v-if="starsList.length">
            <img v-if="it==1" v-for="(it,index) in starsList" width="11" src="./star.png" alt="" />
            <img v-else-if="it==2" src="./star-2.png" width="11" alt="" />
            <img v-else src="./none-star.png" width="11" alt="" />
            <span>{{average}}</span>
        </div>
        <div class="no-tips" v-else>
            <p>暂无评分！</p>
        </div>
    </div>
</template>
<script type="text/javascript">
     export default{
        props:{
            stars : {
                type:String,
                default:''
            },
            average:{
                type:Number,
                default:0
            }
        },
        data(){
            return {
                starsList:[]
            }
        },
        mounted(){
            setTimeout(()=>{
                this.handleStars();
            },50);
        },
        methods:{
            handleStars(){
                let stars = this.stars;
                const firStr = parseInt(stars.substr(0,1));
                const lasStr = parseInt(stars.substr(1));
                if(firStr == 0){
                    return this.starsList = [];
                }
                for(let i = 0; i<5;i++){
                    if(firStr > i){
                       this.starsList.push(1);
                    }
                    else if(firStr == i &&lasStr > 0 ){
                        this.starsList.push(2);
                    }
                    else{
                       this.starsList.push(0);
                    }
                }
               //console.log(this.starsList);
            }
        }
     }
</script>
<style lang="stylus">
    .score{
        .score-list{
            img{
                margin-right:3px;
            }
            span{
                font-size:12px;
                margin-left:12px;
            }
        }
        .no-tips{
            p{
                color:#444;
            }
        }
    }
</style>