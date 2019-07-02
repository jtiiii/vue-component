<template>
    <div>
        <search @keyup="showText" v-model="text" :delay="500"></search>
        {{ text }}
        <br/>
        delay:
        {{ delayText }}
    </div>
</template>
<script>
    import Search from '../../src/scripts/components/search/search.vue';

    export default {
        components:{
            'search': Search
        },
        data(){
            return {
                text: '',
                delayText: ''
            };
        },
        methods:{
            showText( text ){
                this.delayText = text;
            }
        }
    }
</script>
<style scoped>

</style>