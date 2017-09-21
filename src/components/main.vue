<template>
    <div class="main">
        <transition name="slide">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <FooterView></FooterView>
    </div>
</template>
<script type="text/javascript">
    import FooterView from 'components/footer'
    export default{
        components:{
            FooterView
        },
		mounted(){
			this.$router.push('/home');
		}
    }
</script>
<style type="text/css">

</style>