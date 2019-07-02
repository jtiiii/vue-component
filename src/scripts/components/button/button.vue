<script>
    import {Option} from './button';

    export default Option;
</script>
<template>
    <button :class="buttonClass" type="button" @click="click"><slot></slot></button>
</template>
<style scoped>
    button{
        outline: none;
        border: 2px solid;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        margin: 0.3125rem;
    }

    .button-corner-square{
        border-radius: 0;
    }
    @media screen and (min-width:480px){
        button{
            text-align: center;
        }
        button:active{
            box-shadow: 0 0 2px #000;
        }
        button:hover{
            opacity: 0.7;
        }
    }
    @media screen and (max-width:480px){
        button{
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            -webkit-user-select: none;
            -moz-user-select: none;
        }
        button:active{
            opacity: .7;
        }

    }
    button:disabled{
        background: #e8e8e8;
        border: none;
        color: #fff;
        box-shadow: 0 0;
        opacity: .6;
        cursor: not-allowed;
    }
    button:disabled:hover{
        opacity: .6;
    }


    .button-size-smaller{
        font-size: 0.625rem;
        /*margin: 0.1875rem;*/
        min-height: 1.35rem;
        padding: 0.25rem;
    }
    .button-corner-circle.button-size-smaller{
        border-radius: 0.3125rem;
    }
    .button-size-small{
        font-size: 0.9375rem;
        /*margin: 0.28125rem;*/
        min-height: 1.6875rem;
        padding: 0.375rem;
    }
    .button-corner-circle.button-size-small{
        border-radius: 0.46875rem; /* 10px */
    }
    .button-size-medium{
        font-size: 1.25rem;
        /*margin: 0.375rem; !* 6px *!*/
        min-height: 2.25rem; /* 36px */
        padding: 0.5rem;
    }
    .button-corner-circle.button-size-medium{
        border-radius: 0.625rem; /* 10px */
    }
    .button-size-large{
        font-size: 1.875rem;
        /*margin: 0.5625rem;*/
        min-height: 3.375rem;
        padding: 0.75rem;
    }
    .button-corner-circle.button-size-large{
        border-radius: 0.9375rem; /* 10px */
    }
    .button-size-larger{
        font-size: 2.5rem;
        /*margin: 0.75rem; !* 6px *!*/
        min-height: 4.5rem; /* 36px */
        padding: 1rem;
    }
    .button-corner-circle.button-size-larger{
        border-radius: 1.25rem; /* 10px */
    }

    button.pressed{
        color: #fff;
    }

    .button-type-default.pressed{
        background-color: #888;
    }


    .button-type-default{
        color: #000;
        border-color: #e8e8e8;
        background: #e8e8e8;
    }
    .button-type-success.pressed{
        color: #d6e9c6;
        background-color: #3c763d;
    }
    .button-type-success{
        color: #3c763d;
        background-color: #d6e9c6;
        border-color: #d6e9c6;
    }

    .button-type-warning.pressed{
        background-color: #8a6d3b;
        color: #faebcc;
    }
    .button-type-warning{
        color: #8a6d3b;
        background-color: #faebcc;
        border-color: #faebcc;
    }
    .button-type-info.pressed{
        background-color: #31708f;
        color: #bce8f1;
    }
    .button-type-info{
        color: #31708f;
        background-color: #bce8f1;
        border-color: #bce8f1;
    }
    .button-type-danger.pressed{
        background-color: #a94442;
        color: #ebccd1;
    }
    .button-type-danger{
        color: #a94442;
        background-color: #ebccd1;
        border-color: #ebccd1;
    }
</style>