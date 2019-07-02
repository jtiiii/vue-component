<template>
    <div class="hint" :class="hintClass" >
        <slot></slot>
    </div>
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
                return result;
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
        background-color: #8a6d3bcc;
    }
    .hint-type-danger{
        background-color: #ff0000cc;
    }

    .hint-corner-circle{
        border-radius: 0.3125rem;
    }


</style>