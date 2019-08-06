<template>
    <div class="tree" :class="treeClass">
        <f-v-navigator :length="childrenLength" :emotion="emotion" :direction="'column'">
            <template #item="{index}">
                <div class="tree-node" @click="childClick( list[index] )">
                    <slot name="item" :index="index" :item="list[index]"></slot>
                </div>
                <f-v-tree v-show="list[index].show" v-if="list[index][childKey].length"
                          :emotion="list[index].emotion || emotion"
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
                this.$emit('itemClick', item);
            }
        }
    }
</script>
<style>
</style>