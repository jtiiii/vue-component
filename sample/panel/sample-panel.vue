<template>
    <div>
        <panel class="p" :width="'200px'" :height="'100px'">
            <template #title >This is a title</template>
            This is a 'default' panel.
        </panel>

        <panel class="p" :width="'200px'" :height="'100px'" :type="'success'">
            <template #title >This is a title</template>
            This is a 'success' panel.
        </panel>

        <panel class="p" :width="'200px'" :height="'100px'" :type="'warning'">
            <template #title >This is a title</template>
            This is a 'warning' panel.
        </panel>


        <panel class="p" :show="true" :width="'200px'" :height="'100px'" :type="'info'">
            <template #title >This is a title</template>
            This is a 'info' panel.
        </panel>

        <panel class="p" :show="true" :canClose="true" @close="closeHandle" :width="'200px'" :height="'100px'" :type="'danger'">
            <template #title >This is a title</template>
            This is a 'danger' panel.
        </panel>

        <panel class="p" :width="'200px'" :height="'100px'" :type="'default'">
            This is a 'default' panel without title.
        </panel>
    </div>
</template>

<script>
    import Panel from '../../src/scripts/components/panel/panel.vue';
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
        margin: 10px;
    }
</style>