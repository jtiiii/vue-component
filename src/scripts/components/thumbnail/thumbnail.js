import SizeUtils from '../../util/SizeUtils';
import Thumbnail from './ThumbnailModel';

const Option = {
    props:{
        thumbnail: {
            type: Thumbnail,
            required: false,
            default: function(){
                return null;
            },
        },
        src:{
            type: String,
            required: false,
            default: '#'
        },
        name:{
            type: String,
            required: false,
            default: 'none',
        },
        suffix:{
            type: String,
            required: false,
            default: 'none'
        },
        size: {
            type: Number,
            required: false,
            default: 0
        },
        width: {
            type: String,
            required: false,
            default: '160px'
        },
        height: {
            type: String,
            required: false,
            default: '160px'
        }
    },
    methods:{
        imageClick: function(){
            this.$emit('image-click',this.thumbnail || {
                src: this.src,
                name: this.name,
                suffix: this.suffix,
                size: this.size
            });
        }
    },
    computed: {
        formatSize: function(){
            return SizeUtils.format( this.thumbnail? this.thumbnail.size : this.size);
        },
        imgStyle: function(){
            if(this.thumbnail){
                return { 'width': this.thumbnail.width, 'height':this.thumbnail.height};
            }
            return { 'width': this.width, 'height': this.height };
        }
    }
};
export default Option;