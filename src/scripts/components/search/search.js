import Input from '../input/text/text.vue';
import SearchIcon from './images/search.png';
import _ from 'lodash';

export const Option = {
    model:{
        prop: 'search',
        event: 'input'
    },
    components: {
        'v-input': Input
    },
    props:{
        search:{
            type: String,
            required: false,
            default: ''
        },
        delay:{
            type: Number,
            required: false,
            default: 0,
        }
    },
    data(){
        return {
            searchIcon: SearchIcon,
            debounced: null,
        };
    },
    methods: {
        searchChange(e){
            this.$emit('input',e);
        },
        keyup(){
            this.debounced();
        },
        activeKeyup(){
            this.$emit('keyup', this.search );
        }
    },
    created(){
        this.debounced = _.debounce( this.activeKeyup.bind(this), this.delay);
    }
};