<template>
    <div>
        <hint>
            <template #message>Hint</template>
        </hint>
        <hint :type="'success'">
            <template #message>Hint</template>
        </hint>
        <hint :type="'info'">
            <template #message>Hint</template>
        </hint>
        <hint :type="'warning'">
            <template #message>Hint</template>
        </hint>
        <hint :type="'danger'">
            <template #message>Hint</template>
        </hint>

        <hint :type="'default'" :show="hintShow" :position="'bottom-left'">
            <template #message>It's a message.</template>
            <v-button @mouseenter.native="hintShow = true" @mouseleave.native="hintShow = false"  :size="'small'" :type="'info'">Hover show hint.</v-button>
        </hint>
    </div>
</template>
<script>
    import FComponents from '../../src/main';
    export default {
        name: 'sample-hint',
        components:{
            'hint': FComponents.Hint,
            'v-button': FComponents.Button
        },
        data(){
            return{
                hintShow: false
            };
        }
    }
</script>
<style>

</style>