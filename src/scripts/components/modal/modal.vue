<script type="text/javascript">
    import {Option} from './modal';

    export default Option;
</script>
<template>
    <div v-show="show" class="container">
        <div v-if="hasMask" @click="maskClick" class="mask" ref="mask">
        </div>
        <panel class="modal" :class="modalClass" ref="modal" :style="modalStyleComputed" :size="size" :width="width" :type="type" :height="height" :canClose="canClose" @close="closeEvent">
            <template #title><slot name="title"></slot></template>
            <slot></slot>
        </panel>
    </div>
</template>
<style scoped>
    .mask{
        position: absolute;
        width: 100%;
        height: 100%;
        background: #3333;
        margin: 0;
        padding: 0;
        top: 0;
        left: 0;
    }
    .modal{
        border-radius: 0.375rem; /* 6px */
        box-shadow: 1px 1px 5px 1px #000;
        position: absolute;
        display: flex;
        flex-direction: column;
    }
    .container{
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
    }
    .modal-position-top{
        top: 0.25rem; /* 4px */
    }
    .modal-position-left{
        left: 0.25rem; /* 4px */
    }
    .modal-position-right{
        right: 0.25rem /* 4px */
    }
    .modal-position-bottom{
        bottom: 0.25rem; /* 4px */
    }
    .modal-position-under{
        top: calc( 100% + 0.25rem ); /* 100% + 4px */
    }
    .modal-position-above{
        bottom: calc( 100% + 0.25rem ); /* 100% + 4px */
    }
    .modal-position-verticalCenter{
        top: 50%;
    }
    .modal-position-alignCenter{
        left: 50%;
    }



</style>