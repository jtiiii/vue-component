const Option = {
    props:{
        src:{
            type: String,
            required: false,
            default: undefined
        },
        position:{
            type: String,
            required: false,
            default: 'bottom'
        },
        showInfo:{
            type: Boolean,
            required: false,
            default: true
        }
    },
    data(){
        return {};
    },
    computed:{
        coverInfoClass(){
            let result = {};
            result['cover-info-' + this.position ] = true;
            return result;
        }
    }
};
export default Option;