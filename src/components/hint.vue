<template>
    <label class="hint-box" >
        <slot></slot>
        <div ref="message" v-show="show" class="hint" :style="hintStyles" :class="hintClass" >
            <slot name="message"></slot>
        </div>
    </label>
</template>
<script>
    import VueUtils from '../scripts/util/VueUtils';

    export default {
        name: 'f-v-hint',
        props:{
            emotion: VueUtils.props.emotion,
            position: VueUtils.props.position,
            show:{
                type: Boolean,
                required: false,
                default: true
            }
        },
        data(){
            return {
                dom: null,
                offsetWidth: 0,
                offsetHeight: 0,
            };
        },
        computed:{
            positionClass: VueUtils.computed.positionClass,
            hintClass(){
                let result = {};
                let positionClass = this.positionClass;
                positionClass['position-outside'] = true;
                positionClass['position-inside'] = false;
                Object.assign(result,positionClass);
                result['emotion-'+this.emotion] = true;
                result['hint-hover'] = this.hasHover;
                return result;
            },
            hintStyles(){
                if(this.$slots.default){
                    return this.positionStyles(this.positionClass,this.offsetWidth,this.offsetHeight );
                }
                return {};
            },
            hasHover(){
                return this.$slots.default !== undefined && this.$slots.default !== null;
            },
        },
        methods:{
            positionStyles: VueUtils.methods.positionStyles,
            resetPosition(){
                if(!this.show){
                    return;
                }
                this.offsetWidth = this.$refs.message.offsetWidth;
                this.offsetHeight = this.$refs.message.offsetHeight;
            }
        },
        updated(){
            this.resetPosition();
        },
        mounted(){
            if( this.$refs.message){
                this.dom = this.$refs.message;
            }
        },
    }
</script>
<style>
</style>