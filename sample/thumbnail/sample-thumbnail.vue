<template>
    <div class="thumbnail-list">
        <thumbnail v-for="thumbnail in thumbnails" :key="thumbnails.name" :thumbnail="thumbnail"></thumbnail>
    </div>
</template>
<script type="text/javascript">
    import Thumbnail from '../../src/scripts/components/thumbnail/thumbnail.vue';
    import ThumbnailModel from '../../src/scripts/components/thumbnail/ThumbnailModel';
    import img1 from './40658121_p0.jpg';
    import img2 from './54246592_p0.jpg';
    import img3 from './54734161_p0.jpg';

    export default {
        components:{
            'thumbnail' : Thumbnail
        },
        data() {
            return {
                thumbnails: [
                    ThumbnailModel
                        .of({ name: 'image1', size: 762642, suffix: '.jpg', src: img1}),
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