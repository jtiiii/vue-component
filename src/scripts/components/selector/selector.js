import Navigator from '../layout/navigator/navigator.vue';
import Dropdown from '../dropdown.vue';
import Text from '../input/text.vue';
import Button from '../button.vue';
import DropdownIconDefault from '../../../images/drop_down_default.png';
import DropdownIconSuccess from '../../../images/drop_down_success.png';
import DropdownIconWarning from '../../../images/drop_down_warning.png';
import DropdownIconInfo from '../../../images/drop_down_info.png';
import DropdownIconDanger from '../../../images/drop_down_danger.png';



export default {
    name: "f-v-selector",
    model:{
        prop: 'selected',
        event: 'select'
    },
    components: {
        'f-v-navigator': Navigator,
        'f-v-dropdown': Dropdown,
        'f-v-input-text': Text,
        'f-v-button': Button
    },
    props:{
        list:{
            type: Array,
            required: false,
        },
        selected: {
            required: false,
            default: undefined
        },
        type:{
            type: String,
            required: false,
            default: 'default'
        },
        size:{
            type: String,
            required: false,
            default: 'medium'
        },
        emptyValue:{
            required: false,
            default: () => {
                return { text: '<Empty>'};
            }
        }
    },
    data(){
        return {
            // list:[],
            selects: [],
            menuShow: false,
        }
    },
    computed:{
        icon(){
            switch (this.type) {
                case 'warning': return DropdownIconWarning;
                case 'danger': return DropdownIconDanger;
                case 'info': return DropdownIconInfo;
                case 'success': return DropdownIconSuccess;
                default: return DropdownIconDefault;
            }
        },
        selectedText(){
            if(this.selected){
                return this.selected.text;
            }
            return this.emptyValue.text;
        }
    },
    methods:{
        singleSelect( tab, tabKey){
            if(this.selects.indexOf(tabKey) === -1){
                this.selects.pop();
                this.selects.push(tabKey);
            }
            this.menuShow = false;
            this.$emit('select', tab);

        }
    }
}