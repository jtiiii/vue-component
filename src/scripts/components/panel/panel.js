


export const Option ={
    name: 'panel',
    props:{
        width:{
            type: String,
            required: false,
            default: '300px',
        },
        height:{
            type: String,
            required: false,
            default: '200px'
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
        }

    },
    data:function(){
        return {
            'showWith': true
        };
    },
    computed:{
        panelStyle: function(){
            return {
                width: this.width,
                height: this.height
            };
        },
        panelClass: function(){
            let result = {'panel': true};
            switch (this.type) {
                case 'success':
                    result['panel-success'] = true;
                    break;
                case 'warning':
                    result['panel-warning'] = true;
                    break;
                case 'info':
                    result['panel-info'] = true;
                    break;
                case 'danger':
                    result['panel-danger'] = true;
                    break;
                default: break;
            }
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