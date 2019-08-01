<template>
    <label class="switch" :class="switchClass" :checked="checked" @click="checkedOrUnchecked()">
        <span class="dot" :checked="checked" ></span>
    </label>
</template>

<script>
    import VueUtils from '../../util/VueUtils';

    export default {
        name: "f-input-switch",
        model:{
            prop: 'checked',
            event: 'click'
        },
        props:{
            checked:{
                type: Boolean,
                default: false,
                required: false
            },
            emotion: VueUtils.props.emotion,
            size: VueUtils.props.size
        },
        methods:{
            checkedOrUnchecked(){
                this.$emit('click', !this.checked);
            }
        },
        computed:{
            switchClass(){
                let switchClass = {};
                switchClass['emotion-'+this.emotion] = true;
                switchClass['size-' + this.size] = true;
                return switchClass;
            }
        }
    }
</script>

<style>
    @import url('../../../styles/themes/bootstrap/input-switch.css');
</style>