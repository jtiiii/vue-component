<template>
    <div class="selector">
        <slot></slot>
        <f-v-modal
                 :size="modal.size"
                 :emotion="emotion"
                 :hasMask="modal.hasMask"
                 :position="modal.position"
                 :show="listShow"
                 @mask-click="openOrClose(false)"
        >
            <f-v-navigator :length="length"
                           :selects="selects"
                           :direction="'column'"
                           :emotion="emotion"
                           @click="itemClick"
            >
                <template #item="{index}">
                    <slot name="item" :index="index" />
                </template>
            </f-v-navigator>
        </f-v-modal>
    </div>
</template>
<script>
    import Navigator from './navigator.vue';
    import Modal from './modal.vue';
    import VueUtils from '../scripts/util/VueUtils';

    export default {
        name: "f-v-selector",
        components: {
            'f-v-navigator': Navigator,
            'f-v-modal': Modal
        },
        model:{
            prop: 'listShow',
            event: 'openOrClose'
        },
        props:{
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
        data(){
            return {
                showSelect: false,
                modal:{
                    hasMask: false,
                    position: 'outside-bottom',
                    size: 'unlimited'
                }
            };
        },
        methods:{
            itemClick( index ){
                this.$emit('itemClick', index);
            },
            openOrClose( flag ){
                this.$emit('openOrClose', flag);
            }
        }
    }
</script>

<style>
</style>