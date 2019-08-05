<template>
    <div>
        <v-editor @init="initEditor" :handlers="handlers" v-model="content"></v-editor>
    </div>
</template>
<script type="text/javascript">
    import Editor from '../../src/components/editor/quill/quill.vue';

    export default {
        components:{
            'v-editor': Editor
        },
        data(){
            return {
                content: JSON.parse("{\"ops\":[{\"insert\":\"sdfsdf\"},{\"attributes\":{\"header\":1},\"insert\":\"\\n\"}]}"),
                handlers: null,
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