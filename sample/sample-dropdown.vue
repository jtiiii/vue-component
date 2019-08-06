<template>
    <div>
        <dropdown v-model="d1.show" :position="'outside-bottom-center'" :emotion="'info'">
            hello thank you very much;
        </dropdown>
        <dropdown>
            <template #button>
                <button class="btn" type="button">custom dropdown</button>
            </template>
            Are you ok?
        </dropdown>
    </div>
</template>
<script>
    import Dropdown from '../src/components/dropdown.vue';

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