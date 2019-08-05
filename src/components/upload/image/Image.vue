<script type="text/javascript">
    import {Option} from './Image';

    export default Option;
</script>
<template>
    <div>
        <v-modal :hasMask="false" @close="close" :show="show" :size="size" :width="width" :height="height">
            <template #title>{{ title }}</template>
            <div class="thumbnail-list">
                <thumbnail v-for="img in images" :key="img.name" :src="img.src" @image-click="preview" :name="img.name" :size="img.size" :suffix="img.suffix" ></thumbnail>
            </div>
            <div class="upload-tool">
                <upload @select="select" :fileType="'image'" :type="'info'">{{ selectText }}</upload>
                <v-button :type="'warning'" @click="reset">{{ resetText }}</v-button>
                <v-button :type="'success'" @click="submit">{{ submitText }}</v-button>
            </div>
        </v-modal>
<!--        <div v-show="previewImg.show" :style="previewStyle" @click="previewImg.show = false" class="mask">-->
<!--            <img :src="previewImg.src" />-->
<!--        </div>-->

        <v-modal :show="previewImg.show" :modalStyle="previewStyle" @close="previewImg.show = false" >
            <template #title>
                {{ previewTitle }}
            </template>
            <img style="max-width:100%;" :src="previewImg.src">
        </v-modal>
    </div>
</template>
<style scoped>
    .upload-tool{
        position: relative;
        float: right;
    }
    .thumbnail-list{
        width: 100%;
        overflow: hidden;
        overflow-y: scroll;
        height: calc(100% - 3.25rem); /* 100% - 50px*/
    }
    .mask{
        background: #000;
        overflow: hidden;
        overflow-y: scroll;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mask > img{
        max-width: 100%;
    }

</style>