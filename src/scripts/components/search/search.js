import Input from '../input/text/text.vue';
import SearchIcon from './images/search.png';

export const Option = {
    model:{
        prop: 'search',
        event: 'input'
    },
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
        },
        search:{
            type: String,
            required: false,
            default: ''
        }
    },
    data(){
        return {
            searchIcon: SearchIcon,
        };
    },
    methods: {
        searchChange(e){
            console.info('search change');
            this.$emit('input',e);
        }
    }
};