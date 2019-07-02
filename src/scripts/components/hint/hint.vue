<template>
    <label class="hint-box" >
        <slot></slot>
        <div v-show="show" class="hint" :class="hintClass" >
            <slot name="message"></slot>
        </div>
    </label>
</template>
<script>
    import Store from '../../store/Common';

    export default {
        name: 'hint',
        props:{
            type: {
                type: String,
                required: false,
                default: 'default',
                validator( value ){
                    return ['default', 'success', 'info', 'warning', 'danger'].indexOf( value ) !== -1;
                }
            },
            position:{
                type: String,
                required: false,
                default: 'top-left'
            },
            show:{
                type: Boolean,
                required: false,
                default: true
            }
        },
        computed:{
            style(){
                return Store.state.style;
            },
            hintClass(){
                let result = {};
                result['hint-type-'+this.type] = true;
                result['hint-corner-'+this.style.corner] = true;
                result['hint-hover'] = this.hasHover;

                this.position.split('-').forEach( p => {
                    result['hint-hover-'+p] = true;
                });
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
    .hint{
        color: #fff;
        font-size: 0.875rem;
        font-weight: bold;
        padding: 0.125rem 0.25rem;
        display: inline-block;
        opacity: .9;
    }
    .hint-box{
        position: relative;
        display: inline-block;
        width: auto;
        height: auto;
    }
    .hint-hover{
        position: absolute;
    }
    .hint-hover-left{
        left: 0.625rem;
    }
    .hint-hover-right{
        right: 0.625rem;
    }
    .hint-hover-top{
        bottom: 100%;
    }
    .hint-hover-bottom{
        top: 100%;
    }

    .hint-type-default{
        background-color: #000000cc;
    }
    .hint-type-success{
        background-color: #3c763dcc;
    }
    .hint-type-info{
        background-color: #31708fcc;
    }
    .hint-type-warning{
        background-color: #de8d00cc;
    }
    .hint-type-danger{
        background-color: #da0000cc;
    }

    .hint-corner-circle{
        border-radius: 0.3125rem;
    }


</style>