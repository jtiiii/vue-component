<template>
    <div v-show="show" class="modal-container">
        <div v-if="hasMask" @click="maskClick" class="mask" ref="mask">
        </div>
        <panel class="modal" :class="modalClass" ref="modal" :style="modalStyleComputed" :emotion="emotion" :width="width" :size="size" :height="height" :canClose="canClose" @close="closeEvent">
            <template #title><slot name="title"></slot></template>
            <slot></slot>
        </panel>
    </div>
</template>
<script type="text/javascript">
    import Panel from './panel.vue';
    import VueUtils from '../scripts/util/VueUtils';
    export default {
        name: 'f-v-modal',
        components:{
            'panel': Panel
        },
        props:{
            width:{
                type: String,
                required: false,
                default: undefined,
            },
            height:{
                type: String,
                required: false,
                default: undefined,
            },
            show:{
                type: Boolean,
                required: false,
                default: true
            },
            size: VueUtils.props.size,
            hasMask:{
                type: Boolean,
                required: false,
                default: true
            },
            canClose:{
                type: Boolean,
                required: false,
                default: true
            },
            emotion: VueUtils.props.emotion,
            position: VueUtils.props.position,
            modalStyle:{
                type: Object,
                required: false,
                default: () => {return {}},
            }
        },
        data: () => {
            return {
                styles:{
                    modal:{
                        width: 0,
                        height: 0
                    }
                }
            }
        },
        methods:{
            closeEvent: function(){
                this.$emit('close', this);
            },
            maskClick: function(){
                this.$emit('mask-click',this);
            },
            positionStyles: VueUtils.methods.positionStyles,
            resetPosition: function(){
                if(!this.show){
                    return;
                }
                this.styles.modal.height = this.$refs.modal.$el.offsetHeight;
                this.styles.modal.width = this.$refs.modal.$el.offsetWidth;
            }
        },
        computed:{
            modalClass: VueUtils.computed.positionClass,
            modalStyleComputed(){
                return this.positionStyles(this.modalClass, this.styles.modal.width, this.styles.modal.height);
            }
        },
        updated: function(){
            this.resetPosition();
        },
        mounted:function(){
            this.resetPosition();
        }
    };
</script>
<style>
</style>