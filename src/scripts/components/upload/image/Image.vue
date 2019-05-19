<script type="text/javascript">
    import {Option} from './Image';

    export default Option;
</script>
<template>
    <div>
        <v-modal :hasMask="false" @close="close" :show="show" :width="width" :height="height">
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

    .preview{
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        text-align: center;
        object-fit: contain;
    }
</style>