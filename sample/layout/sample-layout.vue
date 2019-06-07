<template>
    <div>
        <v-navigator :tabs="tabs"></v-navigator>
    </div>
</template>
<script>
    import Layout from '../../src/scripts/components/layout/layout';

    export default {
        components:{
            'v-navigator': Layout.Navigator
        },
        data(){
            return {
                tabs: [
                    {text:'tab-1'},
                    {link:'#',text:'tab-2'},
                    {link:'#',text:'tab-3'}
                ],
            };
        }
    };
</script>
<style>

</style>