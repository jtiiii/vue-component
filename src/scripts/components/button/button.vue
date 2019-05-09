<script>
    import {Option} from './button';
    export default Option;
</script>
<template>
    <button :class="typeClass" type="button" :style="buttonStyle" @click="click"><slot></slot></button>
</template>
<style scoped>
    button{
        font-size: 18px;
        outline: none;
        border: 1px solid;
        border-radius: 5px;
        cursor: pointer;
        margin: 1px;
    }
    button:active{
        box-shadow: 0 0;
    }
    button:disabled{
        background: #ccc;
        border: none;
        color: #fff;
        box-shadow: 0 0;
        cursor: not-allowed;
    }

    .button-default{
        color: #000;
        border: 2px solid #e8e8e8;
        background: #e8e8e8;
        box-shadow: 1px 1px 2px 0 #000;
    }

    .button-success{
        color: #3c763d;
        background-color: #d6e9c6;
        border-color: #d6e9c6;
        box-shadow: 1px 1px 2px 0 #3c763d;
        /*border-bottom-color: #3c763d;*/
        /*border-right-color: #3c763d;*/
    }
    .button-warning{
        color: #8a6d3b;
        background-color: #faebcc;
        border-color: #faebcc;
        box-shadow: 1px 1px 2px 0 #8a6d3b;
    }
    .button-info{
        color: #31708f;
        background-color: #bce8f1;
        border-color: #bce8f1;
        /*border-bottom-color: #31708f;*/
        /*border-right-color: #31708f;*/
        box-shadow: 1px 1px 2px 0 #31708f;
    }
    .button-danger{
        color: #a94442;
        background-color: #ebccd1;
        border-color: #ebccd1;
        box-shadow: 1px 1px 2px 0 #a94442;
    }
</style>