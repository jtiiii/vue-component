<template>
    <div class="sample-upload-image">
        <upload-image :show="true" @close="close" :emotion="'default'">
        </upload-image>
    </div>
</template>
<script type="text/javascript">
    import UploadImage from '../src/components/upload-Image.vue';

    export default {
        components:{
            "upload-image": UploadImage
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