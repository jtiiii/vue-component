<script>
    import {Option} from './search';

    export default Option;
</script>
<template>
    <div class="searchBox">
        <img class="searchLogo" :src="searchIcon">
        <v-input @input="searchChange" @keyup="keyup" :text="search" class="searchInput"></v-input>
    </div>
</template>
<style scoped>
    .searchLogo{
        width: 1.125rem; /* 18px */
        height: 1.125rem; /* 18px */
        position: absolute;
        top: 0.375rem;
        left: 4px;
        z-index: 1;
    }
    .searchBox{
        position: relative;
    }
    .searchInput{
        padding-left: 22px;
        position: relative;
    }
</style>