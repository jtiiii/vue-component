import Input from '../input/text/text.vue';
import SearchIcon from './images/search.png';

export const Option = {
    components: {
        'v-input': Input
    },
    props:{
        width: {
            type: String,
            required: false,
            default: 'auto'
        },
        height: {
            type: String,
            required: false,
            default: '18px'
        }
    },
    data(){
        return {
            searchIcon: SearchIcon,
        };
    }
};