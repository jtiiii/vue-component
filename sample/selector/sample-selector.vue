<template>
    <selector v-model="selected" :size="'small'" :type="'success'" :list="list"></selector>
</template>

<script>
    import Selector from '../../src/scripts/components/selector/selector.vue';

    let list = [
        {text:'123'},
        {text: 'sdfsdfsdfsdfsdfsdfsdfsdfs'}
    ];

    export default {
        name:"sample-selector",
        data(){
            return {
                list: list,
                selected: null
            };
        },
        components:{
            'selector': Selector
        }
    }
</script>

<style>

</style>