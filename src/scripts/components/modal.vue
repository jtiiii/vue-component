<script type="text/javascript">
    import Panel from './panel.vue';
    import VueUtils from '../util/VueUtils';
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
            resetPosition: function(){
                if(!this.show){
                    return;
                }
                this.styles.modal.height = this.$refs.modal.$el.offsetHeight;
                this.styles.modal.width = this.$refs.modal.$el.offsetWidth;
            }
        },
        computed:{
            modalClass(){
                let result = {};
                let positions = this.position.split('-');
                positions.forEach( p => {
                    result['position-'+p] = true;
                });
                if(this.position.includes('center')){
                    if(this.position.includes('left')
                        || this.position.includes('right')){
                        result['position-verticalCenter'] = true;
                    }else if( this.position.includes('top')
                        || this.position.includes('bottom')
                        || this.position.includes('under')
                        || this.position.includes('above')
                    ){
                        result['position-alignCenter'] = true;
                    }else{
                        result['position-alignCenter'] = true;
                        result['position-verticalCenter'] = true;
                    }
                }
                return result;
            },
            modalStyleComputed: function(){
                let result = {};
                if(this.modalClass['position-verticalCenter']) {
                    result['margin-top'] = -this.styles.modal.height / 32 + 'rem';
                }
                if(this.modalClass['position-alignCenter']){
                    result['margin-left'] = -this.styles.modal.width / 32 + 'rem';
                }
                return Object.assign(result,this.modalStyle);
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
<style>
    @import url("../../styles/themes/bootstrap/modal.css");
</style>