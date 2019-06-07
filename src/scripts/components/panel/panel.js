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
                return ['auto','smaller','small','medium','large','larger'].indexOf( size ) !== -1;
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
            'showWith': true
        };
    },
    computed:{
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
            result['panel-'+this.size] = true;
            result['panel-'+this.type] = true;
            // switch (this.type) {
            //     case 'success':
            //         result['panel-success'] = true;
            //         break;
            //     case 'warning':
            //         result['panel-warning'] = true;
            //         break;
            //     case 'info':
            //         result['panel-info'] = true;
            //         break;
            //     case 'danger':
            //         result['panel-danger'] = true;
            //         break;
            //     default: break;
            // }
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