<template>
    <div class="sample-page-bar">
        <v-page-bar :emotion="'default'" :all="15" :size="'smaller'" :length="4" :current="currentPage" @goto="goto" />
        <v-page-bar :emotion="'info'" :all="15" :size="'small'" :length="4" :current="currentPage" @goto="goto" />
        <v-page-bar :emotion="'success'" :all="15" :size="'medium'" :length="4" :current="currentPage" @goto="goto" />
        <v-page-bar :emotion="'warning'" :all="15" :size="'large'" :length="4" :current="currentPage" @goto="goto" />
        <v-page-bar :emotion="'danger'" :all="15" :size="'larger'" :length="4" :current="currentPage" @goto="goto" />
    </div>
</template>

<script>
    import PageBar from '../src/components/page-bar.vue';

    export default {
        name: "sample-page-bar",
        components:{
            'v-page-bar': PageBar
        },
        data(){
            return {
                currentPage: 1
            };
        },
        methods:{
            goto(num){
                this.currentPage = num;
            }
        }
    }
</script>

<style scoped>
    .sample-page-bar > div{
        margin-top: 0.25rem;
    }
</style>