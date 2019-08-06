<template>
    <div class="quill" :class="quillClass" >
        <div ref="editor">
        </div>
        <div v-show="hasFooter" class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Quill from 'quill';
    import 'quill/dist/quill.snow.css';
    import VueUtils from '../../scripts/util/VueUtils.js';

    export default {
        model:{
            prop: 'content',
            event: 'change'
        },
        props:{
            handlers:{
                type: Object,
                required: false,
                default: () => new Object()
            },
            placeholder:{
                type: String,
                required: false,
                default: 'Enter words here....'
            },
            content:{
                type: Object,
                required: false,
                default: () => null
            },
            formats: {
                type: Array,
                required: false,
                default: () => []
            },
            toolbar:{
                required: false,
                default: undefined
            },
            emotion:VueUtils.props.emotion
        },
        data(){
            return {
                editor: null,
                option:{
                    debug: 'debug',
                    placeholder: '',
                    readOnly: false,
                    theme: 'snow',
                    modules:{
                        toolbar:[
                            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                            ['blockquote', 'code-block'],
                            // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                            [{ 'direction': 'rtl' }],                         // text direction
                            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                            // [{ 'font': [] }],
                            [{ 'align': [] }],
                            ['image','link','video'],
                            ['clean']                                         // remove formatting button
                        ],
                    }
                },
                handlerMap: {}
            };
        },
        computed:{
            hasFooter(){
                return Boolean(this.$slots.footer);
            },
            quillClass(){
                let result = {};
                result['emotion-'+this.emotion] = true;
                return result;
            }
        },
        methods: {
            initHandlers(){
                let toolbar =this.editor.getModule('toolbar');
                Object.keys(this.handlers).forEach( format => {
                    let _this = this;
                    let handler = function(value){
                        _this.handlers[format](value,this.quill);
                    };
                    this.handlerMap[format] = handler;
                    toolbar.addHandler(format,handler);
                });
            },
            change(){
                this.$emit('change',this.editor.getContents());
            },
            initEditor(){
                this.option.placeholder = this.placeholder;
                if(this.toolbar){
                    this.option.modules.toolbar = this.toolbar;
                }
                this.editor = new Quill(this.$refs['editor'],this.option);
                this.$emit('init', this.editor);
            },
            initChangeHandler(){
                this.editor.on('text-change', this.change );
            },
            initContent(){
                if(this.content){
                    this.editor.setContents(this.content);
                }
            },
        },
        mounted(){
            this.initEditor();
            this.initContent();
            this.initHandlers();
            this.initChangeHandler();
        },
        created(){
            if(this.formats.length){
                this.formats.forEach( format => {
                    Quill.register(format);
                })
            }
        }
    };
</script>
<style>
</style>