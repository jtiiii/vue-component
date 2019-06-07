<script>
    import {Option} from './button';

    export default Option;
</script>
<template>
    <button :class="typeClass" type="button" @click="click"><slot></slot></button>
</template>
<style scoped>
    button{
        outline: none;
        border: none;
        border-radius: 0.625rem; /* 10px */
        cursor: pointer;
        margin: 0.375rem; /* 6px */
        display: inline-block;
        min-height: 2.25rem; /* 36px */
        text-align: center;
        padding: 0.625rem;

    }
    @media screen and (min-width:480px){
        button{
            font-size: 1rem;
            text-align: center;
        }
        button:active{
            box-shadow: 0 0 2px #000;
        }
        button:hover{
            opacity: 0.8;
        }
    }
    @media screen and (max-width:480px){
        button{
            font-size: 1.25rem;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            -webkit-user-select: none;
            -moz-user-focus: none;
            -moz-user-select: none;
        }
        button:active{
            opacity: .7;
        }

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
    }
    .button-success{
        color: #3c763d;
        background-color: #d6e9c6;
        border-color: #d6e9c6;
    }
    .button-warning{
        color: #8a6d3b;
        background-color: #faebcc;
        border-color: #faebcc;
    }
    .button-info{
        color: #31708f;
        background-color: #bce8f1;
        border-color: #bce8f1;
    }
    .button-danger{
        color: #a94442;
        background-color: #ebccd1;
        border-color: #ebccd1;
    }
</style>