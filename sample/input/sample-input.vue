<template>
    <div>
        <input-text v-model="text" @enter="enter"></input-text>
        <br/>
        {{ text }}
        <br/>
        &nbsp;
        <input-file @select="notice">Select Files</input-file>
        &nbsp;
        <input-switch v-model="checked"></input-switch>
    </div>
</template>
<script>
    import Input from '../../src/scripts/components/input/input';

    export default {
        components: {
            'input-text': Input.Text,
            'input-file': Input.File,
            'input-switch': Input.Switch
        },
        data(){
            return {
                text: '',
                checked: false
            };
        },
        methods:{
            notice: function( files ){
                let names = [];
                files.forEach( file => {
                    names.push(file.name);
                });
                alert('Selected files: \n\r' +names);
            },
            enter(){
                alert('Enter event - text: '+this.text);
            }
        }
    }
</script>
<style scoped>
</style>