<template>
    <div class="upload-sample">
        <upload-image>
            <template #select-button> Select </template>
            <template #reset-button> Reset </template>
            <template #submit-button> Submit </template>
        </upload-image>
    </div>
</template>
<script type="text/javascript">
    import Upload from '../../src/scripts/components/upload/Upload';

    export default {
        components:{
            "upload-image": Upload.Image
        },
        data(){
            return {};
        },
        methods: {

        }
    };
</script>
<style scoped>
    .upload-sample{
        width: 100%;
        height: 800px;
        position: relative;
    }
</style>