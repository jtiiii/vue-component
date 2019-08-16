<template>
    <div class="hint-list">
        <hint>
            <template #message>Attention please.</template>
        </hint>
        <hint :emotion="'success'">
            <template #message>Attention please.</template>
        </hint>
        <hint :emotion="'info'">
            <template #message>Attention please.</template>
        </hint>
        <hint :emotion="'warning'">
            <template #message>Attention please.</template>
        </hint>
        <hint :emotion="'danger'">
            <template #message>Attention please.</template>
        </hint>

        <div>
            <hint :emotion="'default'" :show="hintShow" :position="'center-right'">
                <template #message>It's a message.</template>
                <v-button @mouseenter.native="hintShow = true" @mouseleave.native="hintShow = false"  :size="'small'" :emotion="'info'">Hover show hint.</v-button>
            </hint>
        </div>

    </div>
</template>
<script>
    import FComponents from '../src/vue-components';

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
<style scoped>
    .hint-list{
        display: flex;
        flex-flow: column nowrap;
    }
    .hint-list > *{
        margin-top: 0.3125rem;
    }
</style>