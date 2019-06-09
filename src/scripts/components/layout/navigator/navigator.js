function TabItem({text,select = false, __tab}){
    this.text = text;
    this.select = select;
    this.__tab = __tab || arguments[0];
}
TabItem.prototype = {
    constructor: TabItem,
    get(){
        return this.__tab;
    }
};
TabItem.of = obj => obj instanceof TabItem? obj: new TabItem(obj);
TabItem.ofs = arr => {
    let result = [];
    arr.forEach( item => result.push(item));
    return result;
};

const Option = {
    props:{
        tabs: {
            type: Array,
            required: false,
            default : () => []
        },
        direction:{
            type: String,
            required: false,
            default: 'column',
            validator( value ){
                return ['column','row'].indexOf(value) !== -1
            }
        }
    },
    data(){
        return {
            selected: null,
            items: [],
        };
    },
    methods:{
        initTabs(){
            // this.items = TabItem.ofs(this.tabs);
            this.tabs.forEach( tab => {
                this.items.push(TabItem.of(tab));
            });
        },
        click( tab ){
            this.$emit('a-click',tab,this.select.bind(this));
        },
        select( tab ){
            if(this.selected){
                this.selected.select = false
            }
            this.selected = tab;
            if(tab){
                tab.select = true;
            }
        }
    },
    computed:{
        navClass(){
            let result={};
            result['nav-direction-'+this.direction] = true;
            return result;
        }
    },
    created(){
        this.initTabs();
    }
};
export default Option;