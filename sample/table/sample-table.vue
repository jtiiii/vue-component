<template>
    <div>
        <v-button @click="changeList">Change Data</v-button>
        <v-table :list="listSample" :headers="headers" :type="tableType" ></v-table>
    </div>
</template>
<script>
    import Table from '../../src/scripts/components/table/table.vue';
    import FComponents from '../../src/main';

    const sampleHarbour = [
        {
            id: '3',
            code: 'harbour-ys',
            name: '洋山',
            remark: '洋山港口'
        }
    ];

    const sampleGoodsType = [
        { id: 4, code: 'goodsType-001' , name: '普货'},
        { id: 5, code: 'goodsType-002', name: '冷冻'},
        { id: 5, code: 'goodsType-003', name: '超限'}
    ];

    const sampleGoodsSize = [
        { id: 6, code: 'goodsSize-001', name: '20尺'},
        { id: 7, code: 'goodsSize-002', name: '40尺'},
        { id: 8, code: 'goodsSize-003', name: '4尺寸'}
    ];


    const getTextFormatter = function( header ){
        return header.text;
    };

    export default {
        components:{
            'v-table': Table,
            'v-button': FComponents.Button
        },
        data(){
            return {
                listSample: sampleHarbour,
                headersSample: [
                    { column: 'id', text: 'ID', formatter: getTextFormatter},
                    // { column: 'code', text: '编码', formatter: getTextFormatter},
                    { column: 'name', text: '名称', formatter: getTextFormatter},
                    // { column: 'remark', text: '说明', formatter: getTextFormatter},
                    { column: 'operation', text: '操作', formatter: getTextFormatter}
                ],
                flag: false,
                tableType: 'success'
            };
        },
        computed:{
            headers(){
                return this.headersSample;
            }
        },
        mounted(){
        },
        methods: {
            changeList(){
                this.flag =!this.flag;
                if(this.flag){
                    this.listSample = sampleGoodsType;
                }else{
                    this.listSample = sampleHarbour;
                }
            }
        }
    };
</script>
<style scoped>

</style>