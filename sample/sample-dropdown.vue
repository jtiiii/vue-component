<template>
    <div>
        <v-dropdown v-model="d1.show" :position="'outside-bottom-center'" :emotion="'info'">
            hello thank you very much;
        </v-dropdown>
        <v-dropdown v-model="d2.show" :position="'outside-bottom-center'" :emotion="'info'">
            <template #button>
                <!-- todo 在我个人调试的环境下 如果"custom button" 改成 "custom dropdown" 会造成浏览器假死的古怪现象 -->
                <button type="button">custom button</button>
            </template>
            Are you ok?
        </v-dropdown>
    </div>
</template>
<script>
    import Dropdown from '../src/components/dropdown.vue';

    export default {
        components: {
            'v-dropdown': Dropdown
        },
        data(){
            return {
                d1:{
                    show: false
                },
                d2:{
                    show: false,
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