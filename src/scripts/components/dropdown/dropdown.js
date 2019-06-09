import Button from '../button/button.vue';
import Modal from '../modal/modal.vue';
import VueUtils from '../../util/VueUtils';
import WindowUtils from '../../util/WindowUtils';

const Option = {
    model:{
        prop: 'show',
        event: 'openOrClose',
    },
    components:{
        'v-button': Button,
        'v-modal': Modal
    },
    props:{
        text: {
            type: String,
            required: false,
            default: 'Dropdown'
        },
        type:{
            type: String,
            required: false,
            default: 'info'
        },
        show:{
            type: Boolean,
            required: false,
            default: undefined,
        },
        position:{
            type: String,
            required: false,
            default: 'under-left',
            validator( value ){
                return ['under-left','under-right','above-left','above-right'].indexOf(value )!== -1;
            }

        }
    },
    directives:{
        outsideClick: VueUtils.directives.outsideClick
    },
    data(){
        return {
            modal:{
                show: false,
                position: 'under-left',
                hasMask: false
            },
            customButton: false,
        };
    },
    methods: {
        closeMenu: function(){
            this.$emit('openOrClose',false);
            this.modal.show = false;
        },
        openMenu: function(){
            this.$emit('openOrClose',true);
            this.modal.show = true;
        },
        mobileSize(){
            if(window.innerWidth <= 480){
                this.modal.position = 'center';
                this.modal.hasMask = true;
                return ;
            }
            this.modal.position = this.position;
            this.modal.hasMask = false;
        }
    },
    computed:{
        hasCustomButton(){
            return Boolean(this.$slots.button);
        }
    },
    mounted(){
        this.mobileSize();
        WindowUtils.onresize( this.mobileSize.bind(this) );
    }
};

export default Option;