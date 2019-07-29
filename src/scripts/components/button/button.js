import VueUtils from '../../util/VueUtils';

const Option = {
    name: 'v-button',
    props: {
        size: VueUtils.props.size,
        type:{
            type: String,
            required: false,
            default: 'default',
            validator: function( value ){
                return ['default','info','success','warning','danger'].indexOf( value ) !== -1;
            }
        },
        pressed:{
            type: Boolean,
            required: false,
            default: false
        },
        emotion: VueUtils.props.emotion
    },
    data(){
        return { };
    },
    computed: {
        buttonClass() {
            let result = {};
            result['emotion-' + this.emotion] = true;
            result['size-'+this.size] = true;
            result['pressed'] = this.pressed;
            // result['button-size-' + this.size] = true;
            // result['button-corner-' + this.style.corner] = true;
            // result['button-type-'+ this.type ] = true;
            return result;
        },
        style: VueUtils.computed.style
    },
    methods:{
        click: function(){
            this.$emit('click',this);
        },
    }
};
export {Option};