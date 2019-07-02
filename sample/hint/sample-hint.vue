<template>
    <div>
        <hint>Hint</hint>
        <hint :type="'success'">Hint</hint>
        <hint :type="'info'">Hint</hint>
        <hint :type="'warning'">Hint</hint>
        <hint :type="'danger'">Hint</hint>
    </div>
</template>
<script>
    import FComponents from '../../src/main';
    export default {
        name: 'sample-hint',
        components:{
            'hint': FComponents.Hint
        }
    }
</script>
<style>

</style>