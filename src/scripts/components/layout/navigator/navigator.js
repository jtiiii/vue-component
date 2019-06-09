function TabItem({text,select = false, __tab}){
    this.text = text;
    this.select = select;
    if(__tab){
        this.__tab = __tab;
    }else{
        this.__tab = arguments[0];
    }

}
TabItem.prototype = {
    constructor: TabItem,
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
            this.$emit('a-click',tab);
            if(this.selected){
                this.selected.select = false
            }
            this.selected = tab;
            tab.select = true;
        }
    },
    created(){
        this.initTabs();
    }
};
export default Option;