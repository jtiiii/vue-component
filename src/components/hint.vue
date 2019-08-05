<template>
    <label class="hint-box" >
        <slot></slot>
        <div v-show="show" class="hint" :class="hintClass" >
            <slot name="message"></slot>
        </div>
    </label>
</template>
<script>
    import VueUtils from '../scripts/util/VueUtils';

    export default {
        name: 'hint',
        props:{
            emotion: VueUtils.props.emotion,
            position: VueUtils.props.position,
            show:{
                type: Boolean,
                required: false,
                default: true
            }
        },
        computed:{
            positionClass: VueUtils.computed.positionClass,
            hintClass(){
                let result = {};
                Object.assign(result,this.positionClass);
                result['emotion-'+this.emotion] = true;
                result['hint-hover'] = this.hasHover;
                return result;
            },
            hasHover(){
                return this.$slots.default !== undefined && this.$slots.default !== null;
            }
        },
        methods:{
            mouseenter(){
                this.$emit('mouseenter');
            }
        }
    }
</script>
<style>
    @import url('../assets/styles/themes/bootstrap/hint.css');

</style>