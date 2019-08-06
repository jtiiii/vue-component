<template>
    <div class="tree" :class="treeClass">
        <f-v-navigator :length="childrenLength" :emotion="emotion" :direction="'column'">
            <template #item="{index}">
                <div class="tree-node" @click="childClick( list[index] )">
                    <slot name="item" :index="index" :item="list[index]"></slot>
                </div>
                <f-v-tree v-show="show" v-if="list[index][childKey].length"
                          :emotion="list[index].emotion || emotion"
                          :show="(list[index].show instanceof Boolean)? list[index].show: false"
                          :list="list[index][childKey]"
                          @itemClick="childClick"
                >
                    <template #item="{ index, item }">
                        <div class="tree-node">
                            <slot name="item" :index="index" :item="item"></slot>
                        </div>
                    </template>
                </f-v-tree>
            </template>
        </f-v-navigator>
    </div>
</template>

<script>
    import Navigator from './navigator.vue';
    import VueUtils from '../scripts/util/VueUtils';

    export default {
        name: "f-v-tree",
        components:{
            'f-v-navigator': Navigator
        },
        props:{
            emotion: VueUtils.props.emotion,
            list:{
                type: Array,
                required: false,
                default: () => []
            },
            show:{
                type: Boolean,
                required: false,
                default: false,
            },
            childKey:{
                type: String,
                required: false,
                default: 'children'
            }
        },
        computed:{
            childrenLength(){
                return this.list.length;
            },
            treeClass(){
                let result = {};
                result['emotion-'+this.emotion] = true;
                return result;
            }
        },
        methods:{
            childClick( item ){
                // console.info(item);
                this.$emit('itemClick', item);
            }
        }
    }
</script>
<style>
    @import url('../assets/styles/themes/bootstrap/tree.css');
</style>