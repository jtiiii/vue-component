<template>
    <div>
        <cover :position="'top'" :showInfo="show" :src="image">
            <div style="padding: 0.5rem;">
                这里没准是什么什么奇怪的信息。
            </div>
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