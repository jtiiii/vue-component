<template>
    <div class="input-file">
        <input ref="uploadFile"
               @change="change"
               :multiple="multiple"
               hidden
               type="file"
               class="upload"
               :accept="accept" />
        <v-button :emotion="emotion" :size="size" @click="click"><slot></slot></v-button>
    </div>
</template>
<script type="text/javascript">
    import Button from './button.vue';
    import VueUtils from '../scripts/util/VueUtils';
    export default {
        props:{
            emotion: VueUtils.props.emotion,
            fileType: {
                type: String,
                required: false,
                default: 'file',
                validator: function( value ){
                    return ['file', 'image'].indexOf(value) !== -1;
                }
            },
            multiple: {
                type: Boolean,
                required: false,
                default: false
            },
            size: VueUtils.props.size
        },
        data(){
            return {
                file: null,
            };
        },
        components: {
            'v-button': Button
        },
        methods: {
            click: function(){
                this.file.click();
            },
            change: function(){
                let files = this.file.files;
                let result = [];
                for (let i = 0; i < files.length; i++) {
                    result.push(files[i]);
                }
                this.$emit('select',result);
            },
        },
        computed: {
            accept: function(){
                switch (this.fileType) {
                    case 'image': return "image/jpeg, image/jpg, image/png, image/gif";
                    case 'file':
                    default:
                        return "*/*";
                }
            }
        },
        mounted(){
            this.file = this.$refs.uploadFile;
        }
    };
</script>
<style>
    @import url('../assets/styles/themes/bootstrap/input-file.css');
</style>