<template>
    <div id="loading">
        <div class="content1">
            <div class="arc1"></div>
            <div class="arc2"></div>
            <div class="arc3"></div>
            <div class="arc4"></div>
        </div>
        <div class="content2">
            <div class="arc1"></div>
            <div class="arc2"></div>
            <div class="arc3"></div>
            <div class="arc4"></div>
        </div>
    </div>
</template>
<style scoped>
    #loading{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: #000;
        overflow: hidden;
        z-index:990;
    }
    #loading .content2,
    #loading .content1{
        position: absolute;
        left: 50%;
        top:50%;
        width: 30px;
        height: 30px;
        margin: -15px;
    }
    #loading .content2 div,
    #loading .content1 div{
        width: 8px;
        height: 8px;
        border-radius:50%;
        position: absolute;
        background-color: #fff;
        animation:loadingMove 2s linear infinite;
        -webkit-animation:loadingMove 2s linear infinite;
    }
    #loading .content1 .arc1,#loading .content2 .arc1{left: 0; top: 0;}
    #loading .content1 .arc2,#loading .content2 .arc2{right: 0; top: 0;}
    #loading .content1 .arc3,#loading .content2 .arc3{left: 0; bottom: 0;}
    #loading .content1 .arc4,#loading .content2 .arc4{right: 0; bottom: 0;}
    #loading .content2{
        -webkit-transform:rotate(45deg);
        transform:rotate(45deg);
    }
    @keyframes loadingMove{
        0%{ transform:scale(1); }
        50%{ transform:scale(0); }
        100%{ transform:scale(1); }
    }
    @-webkit-keyframes loadingMove{
        0%{ -webkit-transform:scale(1); }
        50%{ -webkit-transform:scale(0); }
        100%{ -webkit-transform:scale(1); }
    }
    #loading .content1 .arc1{ animation-delay:-0.1s; }
    #loading .content2 .arc1{ animation-delay:-0.3s; }
    #loading .content1 .arc2{ animation-delay:-0.5s; }
    #loading .content2 .arc2{ animation-delay:-0.7s; }
    #loading .content1 .arc3{ animation-delay:-0.9s; }
    #loading .content2 .arc3{ animation-delay:-1.1s; }
    #loading .content1 .arc4{ animation-delay:-1.3s; }
    #loading .content2 .arc4{ animation-delay:-1.5s; }
</style>