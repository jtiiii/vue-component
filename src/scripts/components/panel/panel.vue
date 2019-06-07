<script type="text/javascript">
    import {Option} from './panel';

    export default Option;
</script>
<template>
    <div v-show="show" :style="panelStyle" :class="panelClass">
        <div v-if="hasTitle" class="panel-title">
            <slot name="title"></slot>
            <button v-if="canClose" class="close-button" type="button" @click="close">x</button>
        </div>
        <div class="panel-body"><slot></slot></div>
        <div v-if="hasFooter" class="panel-footer"><slot name="footer"></slot></div>
    </div>
</template>
<style scoped>

    .panel{
        max-width: 100%;
        border: 0.125rem /* 2px */ solid #e8e8e8;
        border-radius: 5px;
        background: #fff;
    }
    .panel-auto{
        width: auto;
        height: auto;
    }
    .panel-smaller{
        width: 9.375rem; /* 150px */
        height: 6.25rem; /* 100px */
    }
    .panel-small{
        width: 18.75rem; /* 300px */
        height: 9.375rem; /* 150px */
    }
    .panel-smaller{
        width: 9.375rem; /* 150px */
        height: 6.25rem; /* 100px */
    }
    .panel-small{
        width: 18.75rem; /* 300px */
        height: 9.375rem; /* 150px */
    }
    .panel-medium{
        width: 30rem; /* 480px */
        height: 15.6rem; /* 250px */
    }
    .panel-large{
        width: 43.75rem; /* 700px */
        height: 31.25rem; /* 500px */
    }
    .panel-larger{
        width: 75rem; /* 1200px */
        height: 56.25rem; /* 900px */
    }
    .panel-title{
        background-color: #e8e8e8;
        padding: 0.375rem; /* 6px */
        font-weight: bolder;
        border-bottom: 0.0625rem solid #e8e8e8; /* 1px */
        height: 1.875rem; /* 30px */
        line-height: 1.875rem; /* 30px */
    }
    @media screen and (max-width:480px){
        .panel-body{
            height: calc( 100% - 4.185rem); /* 100% - 67px */
        }
    }
    @media screen and (min-width:480px){
        .panel-body{
            height: calc( 100% - 3.375rem); /* 100% - 54px */
        }
    }
    .panel-body{
        padding: 0.375rem; /* 6px */
        width: calc(100% - 0.75rem); /* 100% - 12px */
        overflow: hidden;
        overflow-y: scroll;
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
        font-size: 1.5rem;
        font-weight: inherit;
        cursor: pointer;
    }
</style>