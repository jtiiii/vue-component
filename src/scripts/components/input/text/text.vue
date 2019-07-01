<template>
    <input @input="textChange" :value="text" @keydown="$emit('keydown')" @keyup="keyup" @keypress="$emit('keypress')" @focusout="$emit('focusout')" @focusin="$emit('focusin')" :placeholder="placeholder" type ="text"/>
</template>
<script>
    import {Option} from './text';
    export default Option;
</script>
<style scoped>
    input{
        font-size: 1rem;
        outline:none;
        border: 0.125rem /* 2px */ solid #e8e8e8;
        box-sizing: border-box;
        border-radius: 0.375rem; /* 6px */
        padding: 0.375rem;
        height: 2rem;
    }
    input::placeholder{
        color: #8e8e8e;
    }
</style>