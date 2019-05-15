<template>
    <div>
        <input-text></input-text>
        &nbsp;
        <input-file @select="notice">Select Files</input-file>
        &nbsp;
    </div>
</template>
<script>
    import Input from '../../src/scripts/components/input/input';

    export default {
        components: {
            'input-text': Input.Text,
            'input-file': Input.File
        },
        data(){
            return { };
        },
        methods:{
            notice: function( files ){
                let names = [];
                files.forEach( file => {
                    names.push(file.name);
                });
                alert('Selected files: \n\r' +names);
            }
        }
    }
</script>
<style scoped>
</style>