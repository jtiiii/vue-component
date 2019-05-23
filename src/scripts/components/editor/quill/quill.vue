<script type="text/javascript">
    import Option from './quill';

    export default Option;
</script>
<template>
    <div>
        <div ref="toolbar"></div>
        <div class="editor" :style="editorStyle" ref="editor">
        </div>
        <div v-show="hasFooter" class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<style scoped>
    .editor{
        /*border-bottom-left-radius: 5px;*/
        /*border-bottom-right-radius: 5px;*/
    }
    .footer{
        width: 100%;
        min-height: 35px;
        border: 1px solid #ccc;
        border-top: none;
        box-sizing: border-box;
    }
</style>