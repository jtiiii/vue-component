<script type="text/javascript">
    import {Option} from './panel';

    export default Option;
</script>
<template>
    <div v-show="show" class="panel" :style="panelStyle" :class="panelClass">
        <div v-if="hasTitle" class="panel-title" :class="panelTitleClass">
            <slot name="title"></slot>
            <button v-if="canClose" class="close-button" type="button" @click="close">x</button>
        </div>
        <div class="panel-body"><slot></slot></div>
        <div v-if="hasFooter" class="panel-footer"><slot name="footer"></slot></div>
    </div>
</template>
<style>
    @import url("../../../styles/themes/components/bootstrap/panel.css");
</style>