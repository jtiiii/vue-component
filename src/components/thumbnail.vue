<template>
    <div class="thumbnail">
        <div class="thumbnail-img">
            <canvas ref="canvas" @click="imageClick" />
        </div>
        <div class="thumbnail-info">
            <slot/>
        </div>
        <input type="hidden" v-model="src" />
    </div>
</template>
<script type="text/javascript">
    import FUtils from 'fo-utils';

    export default {
        props:{
            src:{
                type: String,
                required: false,
                default: '#'
            }
        },
        methods:{
            imageClick: function(){
                this.$emit('image-click',this.thumbnail || {
                    src: this.src,
                    name: this.name,
                    suffix: this.suffix,
                    size: this.size
                });
            },
            drawImage( src ){
                let img = new Image();
                img.src = src;
                img.onload = () =>{
                    let zoom = FUtils.SizeUtils.zoom({width: img.width, height: img.height}, 160 );
                    this.dom.canvas.width = zoom.width;
                    this.dom.canvas.height = zoom.height;
                    this.dom.canvas.getContext("2d").drawImage(img,0,0,zoom.width,zoom.height );
                };
            }
        },
        data(){
            return {
                dom:{
                    canvas: null,
                }
            };
        },
        watch:{
            src( value ){
                this.drawImage(value);
            }
        },
        mounted(){
            this.dom.canvas = this.$refs.canvas;
            if(this.src){
                this.drawImage(this.src);
            }
        }
    };
</script>
<style>
</style>