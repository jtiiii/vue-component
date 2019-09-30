<template>
    <div class="tree" :class="treeClass">
        <f-v-navigator :length="childrenLength" :emotion="emotion" :direction="'column'">
            <template #item="{index}">
                <div class="tree-item">
                    <div class="tree-switch" @click="switchClick( list[index] )">
                        <slot name="switch" :index="index" :item="list[index]"></slot>
                    </div>
                    <div class="tree-node" @click="childClick( list[index] )">
                        <slot name="item" :index="index" :item="list[index]"></slot>
                    </div>
                </div>
                <f-v-tree v-show="list[index].show" v-if="list[index][childKey].length"
                          :emotion="list[index].emotion || emotion"
                          :list="list[index][childKey]"
                          @itemClick="childClick"
                          @switchClick="switchClick"
                >
                    <template #switch="{ index, item}">
                        <slot name="switch" :index="index" :item="item"></slot>
                    </template>
                    <template #item="{ index, item }">
                        <slot name="item" :index="index" :item="item"></slot>
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
            },
            switchClick( item ){
                this.$emit('switchClick', item);
            }
        }
    }
</script>
<style>
</style>