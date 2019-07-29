import CommonStore from '../../store/Common';
import VueUtils from '../../util/VueUtils';

export const Option ={
    name: 'panel',
    props:{
        width:{
            type: String,
            required: false,
            default: undefined,
        },
        height:{
            type: String,
            required: false,
            default: undefined
        },
        size: VueUtils.props.size,
        emotion: VueUtils.props.emotion,
        canClose:{
            type: Boolean,
            required: false,
            default: false
        },
        show:{
            type: Boolean,
            required: false,
            default: true
        },
        customStyle:{
            type: Object,
            required: false,
            default: () => {}
        }
    },
    data:function(){
        return {
            showWith: true
        };
    },
    computed: {
        style(){
            return CommonStore.state.style;
        },
        panelStyle: function(){
            let size = {};
            if(this.width){
                size['width'] = this.width;
            }
            if(this.height){
                size['height'] = this.height;
            }
            return Object.assign(size,this.customStyle);
        },
        panelClass: function(){
            let result = {};
            if (this.size === 'unlimited') {
                result['panel-auto'] = true;
            } else {
                result['size-'+this.size] = true;
                result['size-limit'] = true;
            }
            // result['panel-corner-'+this.style.corner] = true;
            result['emotion-'+this.emotion] = true;
            return result;
        },
        panelTitleClass(){
            let result = {};
            // result['panel-title-corner-'+this.style.corner] = true;
            return result;
        },
        hasTitle: function(){
            return Boolean(this.$slots.title);
        },
        hasFooter: function(){
            return Boolean(this.$slots.footer);
        }
    },
    methods:{
        close: function(){
            this.$emit('close',this);
        }
    }
};