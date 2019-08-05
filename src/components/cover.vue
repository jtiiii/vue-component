<template>
    <div class="cover">
        <img class="img" :src="src"/>
        <div v-show="showInfo" :class="coverInfoClass" class="cover-info">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            src:{
                type: String,
                required: false,
                default: undefined
            },
            position:{
                type: String,
                required: false,
                default: 'bottom',
                validator( value ){
                    return ['top','left','right','bottom'].includes(value);
                }
            },
            showInfo:{
                type: Boolean,
                required: false,
                default: true
            }
        },
        data(){
            return {};
        },
        computed:{
            coverInfoClass(){
                let result = {};
                result['position-' + this.position ] = true;
                return result;
            }
        }
    }
</script>

<style>
    @import url("../assets/styles/themes/bootstrap/cover.css");
</style>