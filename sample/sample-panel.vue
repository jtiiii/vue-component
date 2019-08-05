<template>
    <div>
        <panel class="p" :size="'auto'">
            <template #title >This is a title</template>
            auto size
            <br/>
            This is a 'default' panel.
        </panel>
        <panel class="p" :size="'smaller'" :emotion="'success'">
            <template #title >This is a title</template>
            This is a 'success' panel.
        </panel>
        <panel class="p" :size="'small'" :emotion="'warning'">
            <template #title >This is a title</template>
            This is a 'warning' panel.
        </panel>
        <panel class="p" :size="'medium'" :emotion="'info'">
            <template #title >This is a title</template>
            This is a 'info' panel.
        </panel>
        <panel class="p" :show="true" :canClose="true" @close="closeHandle" :size="'large'" :emotion="'danger'">
            <template #title >This is a title</template>
            This is a 'danger' panel.
        </panel>
        <panel class="p" :size="'larger'" :emotion="'default'">
            This is a 'default' panel without title.
        </panel>
    </div>
</template>

<script>
    import Panel from '@/components/panel.vue';

    export default {
        components:{
            'panel': Panel
        },
        methods:{
            closeHandle: function( panel ){
                console.log('panel - closed', panel);
            }
        }
    }
</script>

<style scoped>
    .p{
        float: left;
        margin: 10px 0;
    }
</style>