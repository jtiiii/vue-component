<template>
    <div>
        <cover :position="'top'" :showInfo="show" :src="image">
            <div style="height: 30px;"></div>
        </cover>
    </div>
</template>
<script>
    import FComponents,{Utils} from '@/vue-components';
    import Image from './assets/QQ20181229-1.jpg';

    export default {
        components:{
            'cover': FComponents.Cover
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