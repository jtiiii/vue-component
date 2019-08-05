<template>
    <div>
        <hint>
            <template #message>Hint</template>
        </hint>
        <hint :emotion="'success'">
            <template #message>Hint</template>
        </hint>
        <hint :emotion="'info'">
            <template #message>Hint</template>
        </hint>
        <hint :emotion="'warning'">
            <template #message>Hint</template>
        </hint>
        <hint :emotion="'danger'">
            <template #message>Hint</template>
        </hint>

        <hint :emotion="'default'" :show="hintShow" :position="'bottom-left'">
            <template #message>It's a message.</template>
            <v-button @mouseenter.native="hintShow = true" @mouseleave.native="hintShow = false"  :size="'small'" :emotion="'info'">Hover show hint.</v-button>
        </hint>
    </div>
</template>
<script>
    import Button from '../src/components/button.vue';
    import Hint from '../src/components/hint.vue';
    export default {
        name: 'sample-hint',
        components:{
            'hint': Hint,
            'v-button': Button
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