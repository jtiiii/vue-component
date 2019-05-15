<template>
    <input :style="inputStyle" :placeholder="placeholder" type ="text"/>
</template>
<script>
    import {Option} from './text';

    export default Option;
</script>
<style scoped>
    input{
        outline:none;
        border: 2px solid #e8e8e8;
        border-radius: 5px;
    }
    input::placeholder{
        color: #8e8e8e;
    }
</style>