<template>
    <div>
        <search @keyup="showText" v-model="input-text" :delay="500"></search>
        {{ input-text }}
        <br/>
        delay:
        {{ delayText }}
    </div>
</template>
<script>
    import Search from '../../src/components/search/search.vue';

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