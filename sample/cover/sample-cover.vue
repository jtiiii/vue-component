<template>
    <div>
        <cover :position="'top'" :showInfo="show" :src="image">
            <div style="height: 30px;"></div>
        </cover>
    </div>
</template>
<script>
    import Cover from '../../src/scripts/components/cover/cover.vue';
    import Image from './QQ20181229-1.jpg';

    export default {
        components:{
            'cover': Cover
        },
        data(){
            return {
                image: Image,
                show: true
            };
        }
    }
</script>

<style scoped>

</style>