<template>
    <div>
        <dropdown>
            <div style="width:5000px;">
                hello thank you very much;
            </div>
        </dropdown>
        <dropdown>
            <template #button>
                <button class="btn" type="button">test</button>
            </template>
            Are you ok?
        </dropdown>
    </div>
</template>
<script>
    import Dropdown from '../../src/scripts/components/dropdown/dropdown.vue';

    export default {
        components: {
            'dropdown': Dropdown
        }
    }
</script>
<style scoped>
    .btn{
        /*border: 1px solid #000;*/
    }
</style>