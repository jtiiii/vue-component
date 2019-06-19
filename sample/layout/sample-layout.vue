<template>
    <div>
        <v-navigator :tabs="tabs" :direction="direction" @a-click="select"></v-navigator>
    </div>
</template>
<script>
    import FComponents from '../../src/main';

    export default {
        components:{
            'v-navigator': FComponents.Layout.Navigator
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
                direction: 'row'
            };
        },
        methods:{
            select(tab, select){
                console.info(tab,select);
                select(tab);
            }
        }
    };
</script>
<style>

</style>