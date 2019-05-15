import Button from '../../button/button.vue';

export const Option = {
    props:{
        type: {
            type: String,
            required: false,
            default: 'default',
            validator: function( value ){
                return ['default', 'success', 'info', 'danger', 'warning'].indexOf(value) !== -1;
            },
        },
        fileType: {
            type: String,
            required: false,
            default: 'file',
            validator: function( value ){
                return ['file', 'image'].indexOf(value) !== -1;
            }
        }
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