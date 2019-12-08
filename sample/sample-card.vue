<template>
    <div>
        <card :cover="img">
            test
        </card>
    </div>
</template>

<script>
    import FComponents from '../src/vue-components';
    import img1 from './assets/40658121_p0.jpg';

    export default {
        name: "SampleCard",
        components:{
            card: FComponents.Card
        },
        data(){
            return {
                img: img1,
            };
        }
    }
</script>

<style scoped>

</style>