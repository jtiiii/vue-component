<template>
    <div>
        <v-navigator :tabs="tabs" v-model="selected" :direction="direction" @a-click="singleSelect"></v-navigator>
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
                direction: 'row',
                selected: [3]
            };
        },
        methods:{
            select(tab, tabKey){
                if(this.selected.indexOf(tabKey) === -1){
                    this.selected.push(tabKey);
                }else{
                    this.selected.splice(this.selected.indexOf(tabKey),1);
                }
                console.info(tab);
            },
            singleSelect(tab, tabKey){
                if(this.selected.indexOf(tabKey) === -1){
                    this.selected.pop();
                }else{
                    return;
                }
                this.selected.push(tabKey);
            }
        }
    };
</script>
<style>

</style>