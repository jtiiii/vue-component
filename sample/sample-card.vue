<template>
    <div class="card-box">
        <card :cover="img1">
            test
        </card>
        <card :flow="'column'" :coverText="'text-1'" :cover="img1">
            test
        </card>
    </div>
</template>

<script>
    import FComponents from '../src/vue-components';
    import img1 from './assets/40658121_p0.jpg';
    import img2 from './assets/54246592_p0.jpg';

    export default {
        name: "SampleCard",
        components:{
            card: FComponents.Card
        },
        data(){
            return {
                img1: img1,
                img2: img2
            };
        }
    }
</script>

<style scoped>
    .card-box{
        display: flex;
        flex-flow: row;
    }
    .card-box .card{
        margin: 0 10px;
    }
</style>