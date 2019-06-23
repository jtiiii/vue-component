import Panel from '../panel/panel.vue';

export const Option = {
    name: 'f-v-modal',
    components:{
        'panel': Panel
    },
    props:{
        width:{
            type: String,
            required: false,
            default: undefined,
        },
        height:{
            type: String,
            required: false,
            default: undefined,
        },
        show:{
            type: Boolean,
            required: false,
            default: true
        },
        size:{
            type: String,
            required: false,
            default: undefined
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
                return [
                    'top-left', 'top-right', 'bottom-left', 'bottom-right',
                    'center',
                    'under-left', 'under-right'].indexOf(position) !== -1;
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
        maskClick: function(){
            this.$emit('mask-click',this);
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
        modalClass(){
            let result = {};
            let positions = this.position.split('-');
            positions.forEach( p => {
                result['modal-position-'+p] = true;
            });
            if(this.position.indexOf('center') !== -1){
                if(this.position.indexOf('left') !== -1
                    || this.position.indexOf('right') !== -1){
                    result['modal-position-verticalCenter'] = true;
                }else if( this.position.indexOf('top') !== -1
                    || this.position.indexOf('bottom') !== -1
                    || this.position.indexOf('under') !== -1
                    || this.position.indexOf('above') !== -1
                ){
                    result['modal-position-alignCenter'] = true;
                }else{
                    result['modal-position-alignCenter'] = true;
                    result['modal-position-verticalCenter'] = true;
                }
            }
            return result;
        },
        modalStyleComputed: function(){
            let result = {};
            if(this.modalClass['modal-position-verticalCenter']) {
                result['margin-top'] = -this.styles.modal.height / 32 + 'rem';
            }
            if(this.modalClass['modal-position-alignCenter']){
                result['margin-left'] = -this.styles.modal.width / 32 + 'rem';
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