// import CommonStore from '../../scripts/store/Common';

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
        // style: () => CommonStore.state.style,
        coverInfoClass(){
            let result = {};
            result['cover-info-' + this.position ] = true;
            return result;
        },
        coverClass(){
          let result = {};
          // result['cover-corner-'+this.style.corner] = true;
          return result;
        }
    }
};
export default Option;