import Panel from '../panel/panel.vue';

export const Option = {
    name: 'modal',
    components:{
        'panel': Panel
    },
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
        show:{
            type: Boolean,
            required: false,
            default: true
        },
        hasMask:{
            type: Boolean,
            required: false,
            default: true
        },
        canClose:{
            type: Boolean,
            required: false,
            default: true
        },
        type:{
            type: String,
            required: false,
            default: 'default',
            validator: function( type ){
                return ['default','info','success','warning','danger'].indexOf(type) !== -1;
            }
        },
        position:{
            type: String,
            required: false,
            default: 'center',
            validator: function( position ){
                return ['top-left','top-right','bottom-left','bottom-right','center'].indexOf(position) !== -1;
            }
        },
        modalStyle:{
            type: Object,
            required: false,
            default: () => {return {}},
        }
    },
    data: () => {
        return {
            styles:{
                modal:{
                    width: 0,
                    height: 0
                }
            }
        }
    },
    methods:{
        closeEvent: function(){
            this.$emit('close', this);
        },
        resetPosition: function(){
            if(!this.show){
                return;
            }
            this.styles.modal.height = this.$refs.modal.$el.offsetHeight;
            this.styles.modal.width = this.$refs.modal.$el.offsetWidth;
        }
    },
    computed:{
        modalStyleComputed: function(){
            let result;
            switch (this.position) {
                case 'top-left':
                    result = {
                        'top': '5px',
                        'left': '5px',
                    };
                    break;
                case 'top-right':
                    result = {
                        'top': '5px',
                        'right': '5px',
                    };
                    break;
                case 'bottom-left':
                    result = {
                        'bottom': '5px',
                        'left': '5px',
                    };
                    break;
                case 'bottom-right':
                    result = {
                        'bottom': '5px',
                        'right': '5px',
                    };
                    break;
                case 'center':
                default:
                    result = {
                        'top': '50%',
                        'left': '50%',
                        'margin-left': - this.styles.modal.width / 2 + 'px',
                        'margin-top': - this.styles.modal.height / 2 + 'px'
                    };
            }
            return Object.assign(result,this.modalStyle);
        }
    },
    updated: function(){
        this.resetPosition();
    },
    mounted:function(){
        this.resetPosition();
    }
};