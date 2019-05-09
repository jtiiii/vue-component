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
        modalStyle: function(){
            switch (this.position) {
                case 'top-left': return {
                    'top': '5px',
                    'left': '5px',
                };
                case 'top-right': return {
                    'top': '5px',
                    'right': '5px',
                };
                case 'bottom-left': return {
                    'bottom': '5px',
                    'left': '5px',
                };
                case 'bottom-right': return {
                    'bottom': '5px',
                    'right': '5px',
                };
                case 'center':
                default: return {
                    'top': '50%',
                    'left': '50%',
                    'margin-left': - this.styles.modal.width / 2 + 'px',
                    'margin-top': - this.styles.modal.height / 2 + 'px'
                };
            }
        }
    },
    updated: function(){
        this.resetPosition();
    },
    mounted:function(){
        this.resetPosition();
    }
};