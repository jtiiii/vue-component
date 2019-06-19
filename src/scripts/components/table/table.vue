<script type="text/javascript">
    import Option from './table';

    export default Option;
</script>
<template>
    <div class="table">
        <div class="row header">
            <div class="cell" :class="cellClass(index) " v-for="(header, index) in table.headers">
                {{ formatHeader(header) }}
            </div>
        </div>
        <div class="row" v-show="!row.hidden" v-for="row in table.rows">
            <div class="cell" v-for="(header, index) in table.headers"
                 :class="cellClass(index,row.cells[header.column])"
                 v-cell="row.cells[header.column]">
            </div>
        </div>
    </div>
</template>
<style scoped>
    .table{
        display: flex;
        flex-flow: column nowrap;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }
    .header{
        font-weight: bolder;
    }
    .header .cell{
        display: flex;
        border-top: none;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
    }
    .row{
        display: flex;
        flex: 1;
        flex-flow: row wrap;
    }
    .cell-first{
        border-left: none;
    }
    .cell-notFirst{
        border-left: 1px solid #ccc;
    }
    .cell{
        flex: 1;
        overflow: hidden;
        border-top: 1px solid #ccc;
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
    }
</style>