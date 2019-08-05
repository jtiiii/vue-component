<template>
    <div>
        <div class="tools">
            <v-button @click="emotion = 'default'" :emotion="'default'" :size="'small'">Default</v-button>
            <v-button @click="emotion = 'info'" :emotion="'info'" :size="'small'">Info</v-button>
            <v-button @click="emotion = 'success'" :emotion="'success'" :size="'small'">Success</v-button>
            <v-button @click="emotion = 'warning'" :emotion="'warning'" :size="'small'">Warning</v-button>
            <v-button @click="emotion = 'danger'" :emotion="'danger'" :size="'small'">Danger</v-button>
        </div>
        <v-editor @init="initEditor" :emotion="emotion" :handlers="handlers" v-model="content"></v-editor>
    </div>
</template>
<script type="text/javascript">
    import Editor from '../src/components/third/quill.vue';
    import Button from '../src/components/button.vue';

    export default {
        components:{
            'v-editor': Editor,
            'v-button': Button,
        },
        data(){
            return {
                content: JSON.parse("{\"ops\":[{\"insert\":\"sdfsdf\"},{\"attributes\":{\"header\":1},\"insert\":\"\\n\"}]}"),
                handlers: null,
                emotion: 'default',
            };
        },
        methods:{
            imageHandler(value,quill){
                console.log('handle image - value:',value,' quill:',quill,' this:',this);
            },
            initEditor( editor ){
                console.info('init',editor);
            }
        },
        created(){
            let _this = this;
            this.handlers = {
                'image': _this.imageHandler
            };
        }
    }
</script>
<style scoped>

</style>