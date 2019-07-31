<template>
    <div class="input-sample-box">
        <input-text v-model="text" :label="'用户名'" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-text v-model="text" :label="'用户名'" :labelPosition="'right'" :emotion="'success'" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-text v-model="text" :label="'用户名'" :labelPosition="'top'" :emotion="'info'" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-text v-model="text" :label="'用户名'" :labelPosition="'bottom'" :emotion="'warning'" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-text v-model="text" :label="'用户名'" :emotion="'danger'" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-text v-model="text" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-file @select="notice" :size="'small'" :emotion="'info'">Select Files</input-file>
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
    .input-sample-box > div{
        margin-top: 0.625rem;
    }
</style>