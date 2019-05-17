<script>
    import {Option} from './search';

    export default Option;
</script>
<template>
    <div class="searchBox">
        <img class="searchLogo" :src="searchIcon">
        <v-input @input="searchChange" :text="search" :height="height" :width="width" class="searchInput"></v-input>
    </div>
</template>
<style scoped>
    .searchLogo{
        width: 18px;
        height: 18px;
        position: absolute;
        top: 3px;
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