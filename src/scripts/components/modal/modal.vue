<script type="text/javascript">
    import {Option} from './modal';

    export default Option;
</script>
<template>
    <div v-show="show">
        <div v-if="hasMask" class="mask" ref="mask">
        </div>
        <panel class="modal" ref="modal" :style="modalStyleComputed" :size="size" :width="width" :type="type" :height="height" :canClose="canClose" @close="closeEvent">
            <template #title><slot name="title"></slot>&nbsp;</template>
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
        border-radius: 5px;
        box-shadow: 1px 1px 5px 1px #000;
        position: absolute;
    }

</style>