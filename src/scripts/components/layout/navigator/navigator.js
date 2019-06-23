import CommonStore from '../../../store/Common';

function TabItem({text,select = false, __tab}, key){
    this.select = select;
    this.key = key;
    this.__tab = __tab || arguments[0];
    Object.defineProperty(this,'text',{
        set(value){
            this.__tab.text = value;
        },
        get(){
            return this.__tab.text;
        }
    });
    this.text = text;
}
TabItem.prototype = {
    constructor: TabItem,
    get(){
        return this.__tab;
    }
};
TabItem.of = (obj, key) => obj instanceof TabItem? obj: new TabItem(obj, key);
TabItem.ofs = arr => {
    let result = [];
    arr.forEach( item => result.push(item));
    return result;
};

const Option = {
    model:{
        prop: 'selects',
        event: 'select'
    },
    props:{
        mapKey:{
            type: String,
            required: false,
            default: '_index_'
        },
        selects: {
            type: Array,
            required: false,
            default: () => []
        },

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
            items: [],
            keyMap:{},
            selectSet: new Set([]),
        };
    },
    watch:{
        selects( values ) {
            this.setSelects(values);
        }
    },
    methods:{
        initTabs(){
            let index = 0;
            let flag = this.useAutoKey;
            this.keyMap = {};
            this.items = this.tabs.map(tab => {
                let item = flag
                    ? TabItem.of(tab, index++ )
                    : TabItem.of(tab, tab[this.mapKey]);
                this.keyMap[item.key] = item;
                return item;
            });
        },
        setSelects( selectArr ){
            let n = new Set(selectArr);
            let unSelects = [...this.selectSet].filter( select => {
                if(n.has(select)){
                    n.delete(select);
                    return false;
                }
                return true;
            });
            this.unselect( unSelects );
            this.select([ ...n ]);
        },
        click( tabItem ){
            this.$emit('a-click', tabItem.get(), tabItem.key );
        },
        select( tabKeys ){
            this.filterExistsTab(tabKeys)
                .forEach( tabKey => {
                    this.keyMap[tabKey].select = true;
                    this.selectSet.add(tabKey);
                });
        },
        unselect( tabKeys ){
            this.filterExistsTab(tabKeys).forEach( tabKey => {
                this.keyMap[tabKey].select = false;
                this.selectSet.delete(tabKey);
            });
        },
        filterExistsTab( tabKeys ){
            return tabKeys.filter( tabKey => {
                let tabItem = this.keyMap[tabKey];
                return !(tabItem === undefined || tabItem == null) && (tabItem instanceof TabItem);
            });
        }
    },
    computed:{
        useAutoKey(){
            return this.mapKey === '_index_';
        },
        style(){
            return CommonStore.state.style;
        },
        navClass() {
            let result = {};
            result['nav-direction-' + this.direction] = true;
            if (this.direction !== 'row') {
                result['nav-corner-' + this.style.corner] = true;
            }
            return result;
        }
    }
    ,
    created(){
        this.initTabs();
        this.setSelects(this.selects);
    }
};
export default Option;