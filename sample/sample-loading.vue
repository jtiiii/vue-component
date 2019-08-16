<template>
    <div class="loading-box">
        <loading :show="show">loading...</loading>
    </div>
</template>

<script>
    import FComponents from '../src/vue-components';

    export default {
        name: "sample-loading",
        components:{
            'loading': FComponents.Loading,
        },
        data(){
            return{
                show: true
            }
        }
    }
</script>

<style scoped>
    .loading-box{
        position: relative;
    }
</style>