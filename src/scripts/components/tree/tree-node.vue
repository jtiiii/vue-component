<template>
    <div v-if="node.id">
        <div :title="title" class="title" ><a v-if="canClick" >{{ text }}</a><span v-else="canClick">{{ text }}</span></div>
        <div v-if="hasChildren" class="indentation">
            <tree-node v-for="child in children" :key="child.id" :node = "child" :parent="node"></tree-node>
        </div>
    </div>
</template>

<script>
    import {Option} from './TreeNode';
    export default Option;
</script>

<style scoped>
    a{
        text-decoration: none;
        cursor: pointer;
    }
    ul{
        list-style-type: none;
    }
    .title{
        background: #aaa;
    }
    .indentation{
        padding-left: 20px;
    }
</style>