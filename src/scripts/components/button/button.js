import CommonStore from '../../store/Common';

const Option = {
    name: 'v-button',
    props: {
        size:{
            type: String,
            required: false,
            default: 'medium',
            validator: function( size ){
                return ['unlimited','auto','smaller','small','medium','large','larger'].indexOf( size ) !== -1;
            }
        },
        type:{
            type: String,
            required: false,
            default: 'default',
            validator: function( value ){
                return ['default','info','success','warning','danger'].indexOf( value ) !== -1;
            }
        }
    },
    data(){
        return { };
    },
    computed:{
        buttonClass(){
            let result = {};
            result['button-size-'+ this.size] = true;
            result['button-corner-'+ CommonStore.state.style.corner] = true;
            result['button-type-'+ this.type ] = true;
            return result;
        }
    },
    methods:{
        click: function(){
            this.$emit('click',this);
        },
    }
};
export {Option};