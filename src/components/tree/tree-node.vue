<template>
    <div v-if="node.id" class="node">
        <div class="title-image" :class="{'node-expanded': expandStatus }"><img class="expand" @click="expand" :class="{'expanded': expandStatus, 'expand-able': node.canOpen, 'expand-unable': !node.canOpen}" :src="expandIcon"><div :title="node.id" :class="classType" class="title" ><a v-if="canClick" @click="nodeClick" >{{
            node.input-text }}</a><span v-else="canClick">{{ input-text }}</span></div></div>
        <div v-show="expandStatus" v-if="hasChildren" class="indentation">
            <tree-node @node-click="sonClick" @expand="sonExpand" v-for="child in children" :key="child.id" :node = "child" :parent="node" :generation=" generation + 1 "></tree-node>
        </div>
    </div>
</template>
<script type="text/javascript">
    import {Option} from './tree-node';

    export default Option;
</script>
<style scoped>
    .expand-able{
        cursor: pointer;
        opacity: 1;
    }
    .expand-unable{
        opacity: 0;
    }
    .expand{
        width: 18px;
        position: relative;
        top: 4px;
        transform: rotate(180deg);
    }
    .expanded{
        transform: rotate(270deg);
        cursor: pointer;
    }
    @media screen and (min-width:480px){
        a{
            text-decoration: none;
            cursor: pointer;
        }
        ul{
            list-style-type: none;
        }
        .indentation{
            padding-left: 10px;
        }
        .title{
            display: inline-block;
            border-radius: 5px;
            padding: 3px;
            margin: 1px 0;
            min-width: 20px;
        }
        .title > a,span{
            padding: 4px;
            display: inline-block;
        }
        .title > a:hover{
            opacity: .7;
        }
        .title-image{
            display: inline-block;
        }
        .node{
            margin: 5px 0;
        }
    }

    @media screen and (max-width:480px){
        .indentation{
            display: flex;
            flex-flow: column nowrap;
            /*padding-left: 100%*/
        }
        .node{
            flex:1;
            text-align: center;
        }
        .node-expanded{
            display: none;
        }
        .title-image{
            flex: 1;
            height: 2rem;
        }
        .title-image > img{
            float: left;
        }
        .title-image > a {
            float: left;
        }
        .title-image > span{
            float: left;
        }
    }

    .select{
        color: #fff;
        font-weight: bolder;
        background-color: #99ccff;
    }
    .title-default{
        color: #000;
        background: #e8e8e8;
    }
    .title-success{
        color: #3c763d;
        background-color: #d6e9c6;
    }
    .title-warning{
        color: #8a6d3b;
        background-color: #faebcc;
    }
    .title-info{
        color: #31708f;
        background-color: #bce8f1;
    }
    .title-danger{
        color: #a94442;
        background-color: #ebccd1;
    }
</style>