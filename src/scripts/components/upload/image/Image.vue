<script type="text/javascript">
    import {Option} from './Image';

    export default Option;
</script>
<template>
    <div>
        <v-modal :hasMask="false" :width="'700px'" :height="'530px'">
            <template #title>{{ title }}</template>
            <div class="thumbnail-list">
                <div class="thumbnail" v-for="img in images">
                    <div class="thumbnail-img" >
                        <img :src="img.src" @click="preview(img)" />
                    </div>
                    <div class="thumbnail-info">
                        <span class="thumbnail-info-name">{{ img.name }}</span>
                        <br/>
                        <span class="thumbnail-info-size">{{ img.formatSize() }} - {{ img.suffix }}</span>
                    </div>
                </div>
            </div>
            <div class="upload-tool">
                <upload @select="select" :fileType="'image'" :type="'info'">{{ selectText }}</upload>
                <v-button :type="'warning'" @click="reset">{{ resetText }}</v-button>
                <v-button :type="'success'" @click="submit">{{ submitText }}</v-button>
            </div>
        </v-modal>
        <v-modal :show="previewImg.show" :modalStyle="previewStyle" :height="'100%'" :width="'100%'" @close="previewImg.show = false" >
            <template #title>
                {{ previewTitle }}
            </template>
            <div class="preview">
                <img style="max-width:100%;" :src="previewImg.src">
            </div>
        </v-modal>
    </div>
</template>
<style scoped>
    .upload-tool{
        position: relative;
        float: right;
        margin: 5px;
    }
    .thumbnail-list{
        width: 100%;
        overflow: hidden;
        overflow-y: scroll;
        height: calc(100% - 40px);
    }
    .thumbnail{
        display: inline-block;
        margin: 5px;
        width: 160px;
    }
    .thumbnail-img{
        width: 160px;
        height: 160px;
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
    }
    .thumbnail-info-size{
        font-size: 12px;
        display: inline-block;
        position: relative;
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
    .preview{
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        text-align: center;
        object-fit: contain;
    }
</style>