<template>
    <label class="switch" :class="switchClass" :checked="checked" @click="checkedOrUnchecked()">
        <span class="dot" :class="dotClass" :checked="checked" ></span>
    </label>
</template>

<script>
    import store from '../../../store/Common';

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
            }
        },
        methods:{
            checkedOrUnchecked(){
                this.$emit('click', !this.checked);
            }
        },
        computed:{
            dotClass: () => {
                let dotClass = {};
                dotClass['dot-corner-'+store.state.style.corner] = true;
                return dotClass;
            },
            switchClass: () => {
                let switchClass = {};
                switchClass['dot-corner-'+store.state.style.corner] = true;
                return switchClass;
            }
        }
    }
</script>

<style scoped>
    .switch{
        width: 2.5rem;
        height: 1.25rem;
        box-sizing: border-box;
        display: inline-block;
        background-color: #fff;
        box-shadow: 0 0 0.0625rem 0 #444;
        position: relative;
    }
    .switch[checked]{
        background-color: #d6e9c6;
    }
    .dot{
        width: 1.25rem;
        height: 1.25rem;
        position: absolute;
        float: left;
        display: inline-block;
        box-sizing: border-box;
        box-shadow: 0 0 0.125rem 0 #444;
        background-color: #fff;
    }
    .dot[checked]{
        float: right;
        right:0;
    }
    .dot-corner-circle{
        border-radius: 1.25rem; /* 16px */
    }
    .switch-corner-circle{
        border-radius: 1.25rem; /* 16px */
    }
</style>