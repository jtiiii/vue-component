<template>
    <div>
        <v-button :emotion="'info'" :size="'small'" @click="addData">add data 1-2-1 </v-button>
        <tree :list="[tree]" :emotion="'info'" @itemClick="nodeClick">
            <template #item="{index,item}">
                {{item.text}}
            </template>
        </tree>
    </div>
</template>
<script>
    import Button from '../src/components/button.vue';
    import Tree from '../src/components/tree.vue';
    export default {
        name: "sample-tree",
        components:{
            "tree": Tree,
            "v-button": Button,
        },
        data(){
            return {
                tree:{
                    text: 'root',
                    show: true,
                    children:[
                        { text: '1', show: false, children: [
                                { text: '1-1', children:[]},
                                { text: '1-2', show:false, children:[]}
                            ]},
                        { text: '2', show: false, children: [
                                { text: '2-1', show: false, children:[
                                        { text: '2-1-1',  children: [
                                            ]}
                                    ]}
                            ]}
                    ]
                }
            }
        },
        methods:{
            nodeClick( node ){
                console.info(node.text);
                node.show = !node.show;
            },
            addData(){
                this.tree.children[0].children[1].children.push({text:'1-2-1', children: []});
                this.tree.children[0].children[1].show = true;
            }
        }

    }
</script>

<style scoped>

</style>