<script>
    import VueUtils from '../../util/VueUtils';

    export default {
        name: 'f-v-button',
        props: {
            size: VueUtils.props.size,
            type:{
                type: String,
                required: false,
                default: 'default',
                validator: function( value ){
                    return ['default','info','success','warning','danger'].indexOf( value ) !== -1;
                }
            },
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
            },
            style: VueUtils.computed.style
        },
        methods:{
            click: function(){
                this.$emit('click',this);
            },
        }
    };
</script>
<template>
    <button class="button" :actived="pressed" :class="buttonClass" type="button" @click="click"><slot></slot></button>
</template>
<style>
    @import url("../../../styles/themes/components/bootstrap/button.css");
</style>