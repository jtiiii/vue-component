<template>
    <div>
        <dropdown v-model="d1.show" :emotion="'info'">
            <div style="width:500px;">
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
        },
        data(){
            return {
                d1:{
                    show: false
                }
            }
        }
    }
</script>
<style scoped>
    .btn{
        /*border: 1px solid #000;*/
    }
</style>