<template>
    <div>
        <dropdown v-model="d1.show" :emotion="'info'">
<!--            <button style="">-->
                hello thank you very much;hello thank you very much;hello thank you very much;hello thank you very much;
            hello thank you very much;
<!--            </button>-->
        </dropdown>
        <dropdown>
            <template #button>
                <button class="btn" type="button">test</button>
            </template>
            Are you ok?
        </dropdown>
        <span>
            <span>
                <span>testsetsetsetse</span>
            </span>
        </span>
    </div>
</template>
<script>
    import Dropdown from '@/scripts/components/dropdown.vue';

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