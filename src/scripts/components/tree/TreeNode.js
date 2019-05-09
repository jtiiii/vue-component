function TreeNode({id, text = '', children = [], canClick = true}){
    this.id = id;
    this.text =text;
    this.children = [];
    children.forEach( child => this.children.push(TreeNode.of(child)));
    this.canClick = canClick;
}
TreeNode.prototype = {
    constructor : TreeNode,
};
TreeNode.of = obj => obj instanceof TreeNode? obj: new TreeNode(obj);


export const Option = {
    name: 'tree-node',
    props:{
        node:{
            type: TreeNode,
            required: false,
            default: () => new TreeNode({})
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
};

export default TreeNode;