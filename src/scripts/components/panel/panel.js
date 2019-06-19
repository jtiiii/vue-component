import CommonStore from '../../store/Common';

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
        size: {
            type: String,
            required: false,
            default: 'auto',
            validator: function( size ){
                return ['unlimited','auto','smaller','small','medium','large','larger'].indexOf( size ) !== -1;
            }
        },
        type:{
            type: String,
            required: false,
            default: 'default',
            validator: function( type ){
                return ['default','info','success','warning','danger'].indexOf(type) !== -1;
            }
        },
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
            let result = {'panel': true};
            switch (this.size) {
                case 'unlimited':
                    result['panel-auto'] = true;
                    break;
                default:
                    result['panel-'+this.size] = true;
                    result['panel-limit'] = true;
            }
            result['panel-corner-'+this.style.corner] = true;
            result['panel-'+this.type] = true;
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