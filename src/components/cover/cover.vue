<template>
    <div class="cover" :class="coverClass">
        <img class="img" :src="src"/>
        <div v-show="showInfo" :class="coverInfoClass" class="cover-info">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Option from './cover';
    export default Option;
</script>

<style scoped>
    .cover {
        padding:0;
        margin:0;
        max-width: 100%;
        display: inline-block;
        position: relative;
        overflow:hidden;

    }
    .img{
        float: left;
        max-width:100%;
        position: relative;
        /*z-index: -1;*/
    }

    .cover-corner-circle{
        border-radius: 0.5rem; /* 8px<*/
    }
    .cover-corner-square{
        border-radius: 0;
    }

    .cover-info{
        position: absolute;
        z-index:1;
        background: #00000066;
        color: #fff;
        overflow: hidden;
    }

    .cover-info-top{
        width: 100%;
        top:0;
        left:0;
    }

    .cover-info-bottom{
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .cover-info-left{
        height: 100%;
        left: 0;
    }
    .cover-info-right{
        height: 100%;
        right: 0;
    }
</style>