import Button from '../button/button.vue';
import Modal from '../modal/modal.vue';
import VueUtils from '../../util/VueUtils';
import WindowUtils from '../../util/WindowUtils';

const Option = {
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
        close: function(){
            this.modal.show = false;
        },
        openMenu: function(){
            this.modal.show = true;
        },
        mobileSize(){
            if(window.innerWidth <= 480){
                this.modal.position = 'center';
                this.modal.hasMask = true;
                return ;
            }
            this.modal.position = 'under-left';
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