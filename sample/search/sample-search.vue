<template>
    <div>
        <search v-model="text" :height="'20px'"></search>
        {{ text }}
    </div>
</template>
<script>
    import Search from '../../src/scripts/components/search/search.vue';

    export default {
        components:{
            'search': Search
        },
        data(){
            return {
                text: ''
            };
        }
    }
</script>
<style scoped>

</style>