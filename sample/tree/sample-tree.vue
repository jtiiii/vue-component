<template>
    <div>
        <tree-node :node="node"></tree-node>
    </div>
</template>
<script>
    import TreeNodeVue from '../../src/scripts/components/tree/tree-node.vue';
    import TreeNode from '../../src/scripts/components/tree/TreeNode';

    const sampleData =
        {
            id: '1' ,text:"root",children:[
                {
                    id: '1-1', text: "1-1", children: [
                        {id: '1-1-1',text: "1-1-1"},
                        {id: '1-1-2',text: "1-1-2"},
                        {id: '1-1-3',text: "1-1-3", children: [
                            {id: '1-1-3-1', text: "1-1-3-1"}
                            ]
                        }
                    ]
                },
                {id: '1-2', text: '1-2'},
                {id: '1-3', text: '1-3',children: [
                        {id: '1-3-1', text: '1-3-1'}
                    ]}
            ]
        };

    export default {
        components:{
            'tree-node': TreeNodeVue
        },
        data: function(){
            return {
                node: TreeNode.of(sampleData)
            };
        }
    }
</script>
<stype></stype>