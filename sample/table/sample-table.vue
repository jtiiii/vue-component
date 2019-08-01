<template>
    <div>
        <div class="tools">
            <v-button @click="changeData" :size="'small'">Change Data</v-button>
            <v-button @click="tableType = 'default'" :emotion="'default'" :size="'small'">Default</v-button>
            <v-button @click="tableType = 'info'" :emotion="'info'" :size="'small'">Info</v-button>
            <v-button @click="tableType = 'success'" :emotion="'success'" :size="'small'">Success</v-button>
            <v-button @click="tableType = 'warning'" :emotion="'warning'" :size="'small'">Warning</v-button>
            <v-button @click="tableType = 'danger'" :emotion="'danger'" :size="'small'">Danger</v-button>
        </div>
        <v-table :rowsSize="rowSize"
                 :emotion="tableType"
                 :headers="headers">
            <template #header-id> 主键ID</template>
            <template #header-code> 编码 </template>
            <template #header-name> 名称 </template>
            <template #header-operation> 操作 </template>

            <template #row-id="{ header, index }">
                {{ getText( header, index ) }}
            </template>

            <template #row-code="{ header, index }">
                {{ getText( header, index ) }}
            </template>

            <template #row-name="{ header, index }">
                {{ getText( header, index ) }}
            </template>

            <template #row-operation="{ header, index }">
                <v-button :emotion="'danger'" :size="'small'" @click="deleteItem(index)" >删除</v-button>
            </template>
        </v-table>
    </div>
</template>
<script>
    import Table from '../../src/scripts/components/table.vue';
    import FComponents from '../../src/main';
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

    export default {
        components:{
            'v-table': Table,
            'v-button': FComponents.Button
        },
        data(){
            return {
                headers: ['id', 'code', 'name', 'operation'],
                data: [sampleGoodsSize,sampleGoodsType],
                tableType: 'default',
                use: 0
            };
        },
        computed:{
            rows(){
                return this.data[this.use];
            },
            rowSize(){
                return this.rows.length;
            }
        },
        methods: {
            changeData(){
                this.use = this.use? 0: 1;
            },
            getText( column, index ){
                return this.rows[index][column];
            },
            deleteItem( index){
                alert(this.rows[index].name);
            }
        }
    };
</script>
<style scoped>
    .tools{
        margin-bottom: 0.625rem;
    }
</style>