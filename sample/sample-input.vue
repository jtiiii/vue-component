<template>
    <div class="input-sample-box">
        <input-text v-model="text" :label="'用户名'" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-text v-model="text" :label="'用户名'" :labelPosition="'right'" :emotion="'success'" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-text v-model="text" :label="'用户名'" :labelPosition="'top'" :emotion="'info'" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-text v-model="text" :label="'用户名'" :labelPosition="'bottom'" :emotion="'warning'" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-text v-model="text" :label="'用户名'" :emotion="'danger'" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-text v-model="text" @enter="enter" :placeholder="'Please press any key'"></input-text>
        <input-file @select="notice" :size="'small'" :emotion="'info'">Select Files</input-file>
        <input-switch v-model="checked" :size="'smaller'"></input-switch>
        <input-switch v-model="checked" :size="'small'" :emotion="'info'"></input-switch>
        <input-switch v-model="checked" :size="'medium'" :emotion="'success'"></input-switch>
        <input-switch v-model="checked" :size="'large'" :emotion="'warning'"></input-switch>
        <input-switch v-model="checked" :size="'larger'" :emotion="'danger'"></input-switch>
    </div>
</template>
<script>
    import InputText from '../src/components/input-text.vue';
    import InputFile from '../src/components/input-file.vue';
    import InputSwitch from '../src/components/input-switch.vue';

    export default {
        name: 'sample-input',
        components: {
            'input-text': InputText,
            'input-file': InputFile,
            'input-switch': InputSwitch
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