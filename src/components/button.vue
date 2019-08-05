<template>
    <button class="button"
            :actived="pressed"
            :class="buttonClass"
            @click="click"
            type="button"
        >
        <slot></slot>
    </button>
</template>
<script>
    import VueUtils from '../scripts/util/VueUtils';

    export default {
        name: 'v-button',
        props: {
            size: VueUtils.props.size,
            pressed:{
                type: Boolean,
                required: false,
                default: false
            },
            emotion: VueUtils.props.emotion
        },
        data(){
            return { };
        },
        computed: {
            buttonClass() {
                let result = {};
                result['emotion-' + this.emotion] = true;
                result['size-'+this.size] = true;
                result['pressed'] = this.pressed;
                return result;
            }
        },
        methods:{
            click: function(){
                this.$emit('click',this);
            },
        }
    };
</script>
<style>
    @import url("../assets/styles/themes/bootstrap/button.css");
</style>