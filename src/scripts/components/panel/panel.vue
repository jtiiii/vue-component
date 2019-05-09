<script type="text/javascript">
    import {Option} from './panel';
    export default Option;
</script>
<template>
    <div v-show="show" :style="panelStyle" :class="panelClass">
        <div v-if="hasTitle" class="panel-title">
            <slot name="title"></slot>
            <button v-if="canClose" class="close-button" type="button" @click="close"><span>x</span></button>
        </div>
        <div class="panel-body"><slot></slot></div>
        <div v-if="hasFooter" class="panel-footer"><slot name="footer"></slot></div>
    </div>
</template>
<style scoped>
    .panel{
        border: 2px solid #e8e8e8;
        border-radius: 5px;
        background: #fff;
    }
    .panel-title{
        background-color: #e8e8e8;
        padding: 5px;
        font-weight: bolder;
        border-bottom: 1px solid #e8e8e8;
    }
    .panel-body{
        padding: 5px;
    }
    .panel-footer{
        border: none;
    }
    .panel-success{
        border-color: #d6e9c6;
    }
    .panel-success > .panel-title{
        color: #3c763d;
        background-color: #d6e9c6;
        border-color: #d6e9c6;
    }
    .panel-warning{
        border-color: #faebcc;
    }
    .panel-warning > .panel-title{
        color: #8a6d3b;
        background-color: #faebcc;
        border-color: #faebcc;
    }
    .panel-info{
        border-color: #bce8f1;
    }
    .panel-info > .panel-title{
        color: #31708f;
        background-color: #bce8f1;
        border-color: #bce8f1;
    }
    .panel-danger{
        border-color: #ebccd1;
    }
    .panel-danger > .panel-title{
        color: #a94442;
        background-color: #ebccd1;
        border-color: #ebccd1;
    }
    .close-button{
        float: right;
        color: #000;
        outline: none;
        text-shadow: 0 1px 0 #fff;
        opacity: .2;
        background: none;
        border: none;
        font-size: inherit;
        font-weight: inherit;
        padding: 0;
        margin: 0 5px;
        cursor: pointer;
    }
    .close-button:active{
        opacity: .4;
    }
</style>