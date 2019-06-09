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
                    {text:'tab-2'},
                    {text:'tab-3'},
                    {text:'tab-4'},
                    {text:'tab-5'},
                    {text:'tab-6'},
                    {text:'tab-7'},
                    {text:'tab-8'}

                ],
            };
        }
    };
</script>
<style>

</style>