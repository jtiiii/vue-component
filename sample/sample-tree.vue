<template>
    <div>
        <tree :list="[tree]" :show="tree.show" :emotion="'info'" @itemClick="nodeClick">
            <template #item="{index,item}">
                {{item.text}}
            </template>
        </tree>
    </div>
</template>
<script>
    import Tree from '../src/components/tree.vue';
    export default {
        name: "sample-tree",
        components:{
            "tree": Tree
        },
        data(){
            return {
                tree:{
                    text: 'root',
                    show: true,
                    children:[
                        { text: '1', show: false, children: [
                                { text: '1-1', show:false, children:[]},
                                { text: '1-2', show:false, children:[]}
                            ]},
                        { text: '2', show: false, children: [
                                { text: '2-1', show: false, children:[
                                        { text: '2-1-1', show:false, children: [
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
            }
        }

    }
</script>

<style scoped>

</style>