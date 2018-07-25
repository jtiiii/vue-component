<template>
    <div>
        <div :title="title" ><a v-if="canClick" >{{ text }}</a><span v-else="canClick">{{ text }}</span></div>
        <div v-if="hasChildren" class="indentation">
            <tree-node v-for="child in children" v-if="child && child.id" :node = "child" :parent="node"></tree-node>
        </div>
    </div>
</template>


<script>
    function validateNode (node){
        if(!node.id || !node.id instanceof String ){
            return false;
        }
    }

    export default {
        name: 'tree-node',
        props:{
            node:{
                type: Object,
                required: true,
                validate: validateNode
            },
            parent:{
                type: Object,
                default: ()=> null
            }
        },
        computed:{
            title (){
                return this.node.id;
            },
            hasChildren (){
                return this.children && (this.children instanceof Array ) &&  this.children.length !== 0;
            },
            text (){
                return this.node.text;
            },
            canClick (){
                return this.node.canClick instanceof Boolean? this.node.canClick : true;
            },
            children (){
                return this.node.children instanceof Array ? this.node.children : [];
            }
        },
    }
</script>

<style scoped>
    a{
        text-decoration: none;
        cursor: pointer;
    }
    ul{
        list-style-type: none;
    }
    .indentation{
        padding-left: 20px;
    }
</style>