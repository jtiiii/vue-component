<template>
    <div class="thumbnail-list">
        <thumbnail v-for="thumbnail in thumbnails" :key="thumbnail.name" :src="thumbnail.src">
            <div>
                sdfsd sdfsd fsdfsd fsd fs d
            </div>
        </thumbnail>
    </div>
</template>
<script type="text/javascript">
    import Thumbnail from '../src/components/thumbnail/thumbnail.vue';
    import ThumbnailModel from '../src/components/thumbnail/ThumbnailModel';
    import img1 from './assets/40658121_p0.jpg';
    import img2 from './assets/54246592_p0.jpg';
    import img3 from './assets/54734161_p0.jpg';

    export default {
        components:{
            'thumbnail' : Thumbnail
        },
        data() {
            return {
                thumbnails: [
                    ThumbnailModel
                        .of({ name: 'image1image1image1image1image1image1image1image1image1image1vvimage1image1image1image1image1image1image1', size: 762642, suffix: '.jpg', src: img1}),
                    ThumbnailModel
                        .of({ name: 'image2', size: 366793, suffix: '.jpg', src: img2}),
                    ThumbnailModel
                        .of({ name: 'image3', size: 304154,suffix: '.jpg', src: img3})
                ]
            };
        }

    };
</script>
<style scoped>
    .thumbnail-list{
        width: 100%;
        height: 500px;
    }
</style>