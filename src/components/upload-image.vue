<template>
    <div class="upload-image">
        <v-modal class="upload-box" :hasMask="false" @close="close" :show="show" :size="size" :emotion="emotion">
            <template #title>{{ title }}</template>
<!--            <div class="upload-image-container">-->
                <div class="thumbnail-list">
                    <thumbnail v-for="img in images" :key="img.name" :src="img.src" @image-click="preview">
                        <div class="name">{{img.name}}</div>
                        <div class="info">{{img.formatSize()}} - {{img.suffix}}</div>
                    </thumbnail>
                </div>
                <div class="upload-tool">
                    <upload @select="select" :size="'small'" :fileType="'image'" :emotion="'info'">{{ selectText }}</upload>
                    <v-button :emotion="'warning'" :size="'small'" @click="reset">{{ resetText }}</v-button>
                    <v-button :emotion="'success'" :size="'small'" @click="submit">{{ submitText }}</v-button>
                </div>
<!--            </div>-->
        </v-modal>
<!--        <div v-show="previewImg.show" :style="previewStyle" @click="previewImg.show = false" class="mask">-->
<!--            <img :src="previewImg.src" />-->
<!--        </div>-->

        <v-modal class="preview" :show="previewImg.show" :position="'top-center'" :size="'unlimited'" :modalStyle="previewStyle" @close="previewImg.show = false" >
            <template #title>
                {{ previewTitle }}
            </template>
            <img class="preview-img" :src="previewImg.src">
        </v-modal>
    </div>
</template>
<script type="text/javascript">
    import Modal from './modal.vue';
    import InputFile from './input-file.vue';
    import Button from './button.vue';
    import FUtils from 'fo-utils';
    import SparkMd5 from 'spark-md5';
    import VueUtils from '../scripts/util/VueUtils';
    import Thumbnail from './thumbnail.vue';

    function UploadImage(file){
        this.file = file;
        this.name = file.name.substring(0,file.name.lastIndexOf("."));
        this.size = file.size;
        this.suffix = file.name.substring(file.name.lastIndexOf(".")+1);
        this.src = '';
        this.load = false;
        this.md5 = "";
    }
    UploadImage.prototype = {
        constructor: UploadImage,
        loadBase64Url(){

            let reader = new FileReader();
            let byteReader = new FileReader();

            return new Promise( resolve => {
                if(this.file){
                    reader.readAsDataURL(this.file);
                    byteReader.readAsBinaryString(this.file);
                    let _this = this;
                    reader.onload = function(){
                        _this.src = this.result;
                        byteReader.onload = function(){
                            _this.md5 = SparkMd5.hashBinary(this.result,false);
                            _this.load = true;
                            resolve( _this );
                        };
                    };

                }
            });
        },
        formatSize(){
            return FUtils.SizeUtils.format(this.size);
        }
    };

    export default {
        components: {
            'v-modal': Modal,
            'upload': InputFile,
            'v-button': Button,
            'thumbnail': Thumbnail,
        },
        props: {
            title: {
                type: String,
                required: false,
                default: 'Upload Images'
            },
            previewTitle:{
                type: String,
                required: false,
                default: 'Preview'
            },
            submitText:{
                type: String,
                required: false,
                default: 'Submit'
            },
            resetText:{
                type: String,
                required: false,
                default: 'Reset'
            },
            selectText:{
                type: String,
                required: false,
                default: 'Select'
            },
            images:{
                type: Array,
                required: false,
                default: () => []
            },
            size: VueUtils.props.size,
            show:{
                type: Boolean,
                required: false,
                default: false
            },
            emotion: VueUtils.props.emotion
        },
        data(){
            return {
                previewImg:{
                    src: '#',
                    show: false
                },
                previewStyle: {
                    'max-width': '100%',
                    'max-height': '100%'
                }
            };
        },
        methods: {
            select: function( files ){
                files.forEach( file => {
                    this.loadImage(file);
                });
            },
            loadImage: function(file ){
                let image = new UploadImage(file);
                this.images.push(image);
                image.loadBase64Url();
            },
            reset: function() {
                this.$emit('reset',this.images);
                while(this.images.length){
                    this.images.pop();
                }

                this.previewImg.src = '#';
                this.previewImg.show = false;
            },
            preview: function( img ){
                this.previewImg.src = img.src;
                this.previewImg.show = true;
            },
            submit: function(){
                this.$emit('submit',this.images);
            },
            close: function(){
                this.$emit('close');
            },
            resizePreview(){
                this.previewStyle['width'] = window.innerWidth + 'px';
                this.previewStyle['height'] = window.innerHeight + 'px';
            }
        },
        created(){
        }
    };
</script>
<style>
</style>