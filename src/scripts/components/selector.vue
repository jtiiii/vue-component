<template>
    <f-v-dropdown class="selector"
                  :emotion="emotion"
                  :text="text"
                  :show="listShow"
                  @openOrClose="listShoChange">
        <template #button>
            <slot name="button"></slot>
        </template>
        <f-v-navigator :length="length"
                       :selects="selects"
                       :direction="'column'"
                       :emotion="emotion"
                       @click="itemClick"
        >
            <template #item="{index}">
                <slot name="item" :index="index"></slot>
            </template>
        </f-v-navigator>
    </f-v-dropdown>
</template>
<script>
    import Navigator from './navigator.vue';
    import Dropdown from './dropdown.vue';
    import Button from './button.vue';
    import VueUtils from '../util/VueUtils';



    export default {
        name: "f-v-selector",
        components: {
            'f-v-navigator': Navigator,
            'f-v-dropdown': Dropdown,
            'f-v-button': Button
        },
        model:{
            prop: 'listShow',
            event: 'openOrClose'
        },
        props:{
            text:{
                type: [String, Number],
                required: false,
                default: ''
            },
            listShow:{
                type: Boolean,
                required: false,
                default: false,
            },
            length:{
                type: Number,
                required: false,
                default: 0
            },
            selects: {
                type: Array,
                required: false,
                default: () => []
            },
            emotion: VueUtils.props.emotion,
            size: VueUtils.props.size,
        },
        methods:{
            singleSelect( tab, tabKey){
                if(this.selects.indexOf(tabKey) === -1){
                    this.selects.pop();
                    this.selects.push(tabKey);
                }
                this.menuShow = false;
                this.$emit('select', tab);

            },
            itemClick( index ){
                this.$emit('itemClick', index);
            },
            listShoChange( flag ){
                this.$emit('openOrClose', flag);
            }
        }
    }
</script>

<style>
    @import url("../../styles/themes/bootstrap/selector.css");
</style>