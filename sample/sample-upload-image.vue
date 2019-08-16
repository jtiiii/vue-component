<template>
    <div class="sample-upload-image">
        <upload-image :show="true" :size="'large'" @close="close" :emotion="'default'">
        </upload-image>
    </div>
</template>
<script type="text/javascript">
    import FComponents from '../src/vue-components';

    export default {
        components:{
            "upload-image": FComponents.Upload.Image
        },
        data(){
            return {};
        },
        methods: {
            close(){
                console.info('close');
            }
        }
    };
</script>
<style scoped>
    .sample-upload-image{
        width: 100%;
        height: 800px;
        position: relative;
    }
</style>