<template>
    <div>
        <v-table :rows="5" :cols="6" :cellWidth="'100px'" :cellHeight="'40px'" ></v-table>
    </div>
</template>
<script>
    import Table from '../../src/scripts/components/table/table.vue';

    export default {
        components:{
            'v-table': Table
        },
        data(){
            return {};
        },
        methods: {

        }
    };
</script>
<style scoped>

</style>