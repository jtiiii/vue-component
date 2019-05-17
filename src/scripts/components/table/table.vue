<script type="text/javascript">
    import Option from './table';

    export default Option;
</script>
<template>
    <div>
        <div class="row" :style="rowStyle" v-for="row in cells">
            <div class="cell" :style="cellStyle" v-for="cell in row">
                {{ cell.data }}
            </div>
        </div>
    </div>
</template>
<style scoped>
    .row{
        width: 100%;
        height: 100px;
    }
    .cell{
        float : left;
        border: 1px solid #000;
        /*width: 100px;*/
        /*height: 100px;*/
        box-sizing: border-box;

    }
</style>