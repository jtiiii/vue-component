<template>
    <div v-show="show" class="v-loading-mask" :class="loadingClass">
        <div class="loading-content" ref="content" :style="contentStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    export default {
        name: "f-v-loading",
        props:{
            show:{
                type: Boolean,
                required: false,
                default: false,
            },
            scope:{
                type: String,
                required: false,
                default: 'scoped',
                validator( value ){
                    return ['scoped', 'global'].includes( value );
                }
            }
        },
        data(){
            return {
                width: 0,
                height: 0,
                offsetWidth: 0,
                offsetHeight: 0
            }
        },
        computed:{
            loadingClass(){
                let result = {};
                result[this.scope] = true;
                return result;
            },
            contentStyle(){
                return { 'margin-left': (- this.offsetWidth / 2 )+ 'px', 'margin-top': (-this.offsetHeight / 2) + 'px' };
            }
        },
        methods:{
            resize(){
                this.offsetWidth = this.$refs.content.offsetWidth;
                this.offsetHeight = this.$refs.content.offsetHeight;
            }
        },
        updated(){
            this.resize();
        },
        mounted(){
            this.resize();
        },
        created(){
            // WindowUtils.onresize( this.resize.bind(this) );
        }

    }
</script>
<style>
</style>