import Modal from '../../modal/modal.vue';
import Input from '../../input/input';
import Button from '../../button/button.vue';
import SizeUtils from '../../../util/SizeUtils';
import loading from './loading.png';

import MD5 from 'md5';

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
        return new Promise( resolve => {
            let reader = new FileReader();
            if(this.file){
                reader.readAsDataURL(this.file);
                let _this = this;
                reader.onload = function(){
                    _this.src = this.result;
                    _this.md5 = MD5(this.result);
                    _this.load = true;
                    console.info('read');
                    resolve( _this );
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
        'v-button': Button
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
        }
    },
    data(){
        return {
            // images: [],
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
            console.info('preview');
            this.previewImg.src = img.src;
            this.previewImg.show = true;
        },
        submit: function(){
            this.$emit('submit',this.images);
        }
    }
};