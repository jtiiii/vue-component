<script type="text/javascript">
    import Option from './thumbnail';

    export default Option;
</script>
<template>
    <div class="thumbnail">
        <div class="thumbnail-img" :style="imgStyle" >
            <img :title="thumbnail? thumbnail.name : name" :src="thumbnail ? thumbnail.src : src" @click="imageClick" />
        </div>
        <div class="thumbnail-info">
            <span class="thumbnail-info-name">{{ imageName }}</span>
            <br/>
            <span class="thumbnail-info-size">{{ formatSize }} - {{ thumbnail? thumbnail.suffix : suffix }}</span>
        </div>
    </div>
</template>
<style scoped>
    .thumbnail{
        display: inline-block;
        margin: 5px;
        width: 160px;
    }
    .thumbnail-img{
        display: table-cell;
        position: relative;
        vertical-align: middle;
        text-align: center;
    }
    .thumbnail-info{
        background: #eee;
        line-height: 25px;
        text-align: center;
        width: 100%;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .thumbnail-info-name{
        font-weight: bolder;
        display: inline-block;
        width: 100%;
    }
    .thumbnail-info-size{
        font-size: 12px;
        display: inline-block;
        position: relative;
        width: 100%;
        right: 0;
        opacity: .6;
    }
    .thumbnail-img > img{
        max-width: 100%;
        max-height: 100%;
    }
    .thumbnail-img > img:hover {
        box-shadow: 0 0 8px #000;
    }
</style>