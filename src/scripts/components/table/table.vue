<script type="text/javascript">
    import Option from './table';

    export default Option;
</script>
<template>
    <div class="table" :class="tableClass">
        <div class="header">
            <div class="cell" :class="cellClass(index) " v-for="(header, index) in table.headers">
                {{ formatHeader(header) }}
            </div>
        </div>
        <div class="row"
             v-for="(row, rowNum) in table.rows"
             v-show="!row.hidden"
             :class="rowClass(rowNum, row)"
        >
            <div class="cell" v-for="(header, index) in table.headers"
                 :class="cellClass(index,row.cells[header.column])"
                 v-cell="[row.data,row.cells[header.column]]">
            </div>
        </div>
    </div>
</template>
<style scoped>
    .table{
        display: flex;
        flex-flow: column nowrap;
        box-sizing: border-box;
        border: 0.125rem /* 2px */ solid;
    }
    .table-corner-circle{
        border-radius: 0.625rem /* 10px */;
    }
    .table-corner-square{
        border-radius: 0;
    }
    .header{
        font-weight: bolder;
        border-top: none;
        display: flex;
        flex: 1;
        flex-flow: row wrap;
    }
    .header .cell{
        padding: 1.25rem /* 20px */ 0.625rem /* 10px */;
    }
    .row{
        display: flex;
        flex: 1;
        flex-flow: row wrap;
        border-top: 0.125rem solid;
        border-color: inherit;
    }

    .table-type-success{
        color: #3c763dbb;
        border-color: #d6e9c6;
    }
    .table-type-success .header{
        color: #3c763d;
        background-color: #d6e9c6;
    }
    .table-type-success .row-line{
        background-color: #d6e9c688;
    }

    .table-type-warning{
        color: #8a6d3bbb;
        border-color: #faebcc;
    }
    .table-type-warning .header{
        color: #8a6d3b;
        background-color: #faebcc;
    }
    .table-type-warning .row-line{
        background-color: #faebcc88;
    }

    .table-type-info{
        color: #31708faa;
        border-color: #bce8f1;
    }
    .table-type-info .header{
        color: #31708f;
        background-color: #bce8f1;
    }
    .table-type-info .row-line{
        background-color: #bce8f188;
    }

    .table-type-danger{
        color: #a94442aa;
        border-color: #ebccd1;
    }

    .table-type-danger .header{
        color: #a94442;
        background-color:#ebccd1;
    }

    .table-type-danger .row-line{
        background-color: #ebccd188;
    }

    .table-type-default{
        color: #555555aa;
        border-color:  #d6d6d6;
    }
    .table-type-default .header{
        color: #555;
        background-color: #d6d6d6;
    }
    .table-type-default .row-line{
        background-color: #f5f5f5;
    }
    /*.table-type-default .cell{*/
    /*    border-color:  #d6d6d6;*/
    /*}*/

    .row-line{
        background: #f5f5f5;
    }

    .cell-first{
        border-left: none;
    }
    
    .cell{
        flex: 1;
        overflow: hidden;
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: left;
        padding: 0.625rem /* 10px */;
    }
</style>