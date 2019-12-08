<template>
    <div class="thumbnail-list">
        <thumbnail v-for="thumbnail in thumbnails" :key="thumbnail.name" :src="thumbnail.src" @image-click="showImage(thumbnail.src)">
            <div>
                information
            </div>
        </thumbnail>
        <image-view :src="view.src" :show="view.show" />
    </div>
</template>
<script type="text/javascript">
    import FComponents from '../src/vue-components';
    import img1 from './assets/40658121_p0.jpg';
    import img2 from './assets/54246592_p0.jpg';
    import img3 from './assets/54734161_p0.jpg';

    export default {
        components:{
            'thumbnail' : FComponents.Thumbnail,
            'image-view': FComponents.ImageView
        },
        data() {
            return {
                thumbnails: [{src: img1}, {src: img2}, { src: img3}],
                view:{
                    src: '',
                    show: false
                }
            };
        },
        methods:{
            showImage( src ){
                this.view.show = true;
                this.view.src = src;
                console.info(src);
            }
        }
    };
</script>
<style scoped>
    .thumbnail-list{
        width: 100%;
    }
</style>