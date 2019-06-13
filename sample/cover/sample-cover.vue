<template>
    <div>
        <cover :position="'top'" :showInfo="show" :src="image">
            <div style="height: 30px;"></div>
        </cover>
    </div>
</template>
<script>
    import FComponents,{Utils} from '../../src/scripts/vue-component';
    import Image from './QQ20181229-1.jpg';

    console.info(Utils.WindowUtils.onresize);
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