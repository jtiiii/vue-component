<template>
    <div class="thumbnail-list">
        <thumbnail v-for="thumbnail in thumbnails" :key="thumbnail.name" :src="thumbnail.src">
            <div>
                information
            </div>
        </thumbnail>
    </div>
</template>
<script type="text/javascript">
    import Thumbnail from '../src/components/thumbnail.vue';
    import img1 from './assets/40658121_p0.jpg';
    import img2 from './assets/54246592_p0.jpg';
    import img3 from './assets/54734161_p0.jpg';

    export default {
        components:{
            'thumbnail' : Thumbnail
        },
        data() {
            return {
                thumbnails: [{src: img1}, {src: img2}, { src: img3}
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