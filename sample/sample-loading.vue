<template>
    <div class="loading-box">
        <loading :show="show">loading...</loading>
    </div>
</template>

<script>
    import Loading from '../src/components/loading-mask.vue';
    export default {
        name: "sample-loading",
        components:{
            'loading': Loading,
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