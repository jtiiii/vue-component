import Modal from '../../modal.vue';
import Input from '../../input';
import Button from '../../button.vue';
import SizeUtils from '../../../scripts/util/SizeUtils';
import loading from './loading.png';
import SparkMd5 from 'spark-md5';

import Thumbnail from '../../thumbnail.vue';

function UploadImage(file){
    this.file = file;
    this.name = file.name.substring(0,file.name.lastIndexOf("."));
    this.size = file.size;
    this.suffix = file.name.substring(file.name.lastIndexOf(".")+1);
    this.src = loading;
    this.load = false;
    this.md5 = "";
}
UploadImage.prototype = {
    constructor: UploadImage,
    loadBase64Url(){
        // let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
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
        return SizeUtils.format(this.size);
    }
};

export const Option={
    components: {
        'v-modal': Modal,
        'upload': Input.File,
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
        width:{
            type: String,
            required: false,
            default: undefined
        },
        height:{
            type: String,
            required: false,
            default: undefined
        },
        size:{
            type: String,
            required: false,
            default: 'large'
        },
        show:{
            type: Boolean,
            required: false,
            default: false
        }
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
        let _vue = this;
        // window.onresize = function() {
        //     _vue.resizePreview();
        // }
    }
};