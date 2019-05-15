<template>
    <div>
        <search :height="'20px'"></search>
    </div>
</template>
<script>
    import Search from '../../src/scripts/components/search/search.vue';

    export default {
        components:{
            'search': Search
        },
        data(){
            return {};
        }
    }
</script>
<style scoped>

</style>