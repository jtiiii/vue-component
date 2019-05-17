function TreeNode({id, type , text = '', children = [], canClick = true, canOpen = false, select = false}){
    this.id = id;
    this.text =text;
    this.children = [];
    children.forEach( child => this.children.push(TreeNode.of(child)));
    this.type = type? 'default': type;
    this.canClick = canClick;
    this.select = select;
    this.canOpen = canOpen? canOpen: this.children.length !== 0;
}
TreeNode.prototype = {
    constructor : TreeNode,
};
TreeNode.of = obj => obj instanceof TreeNode? obj: new TreeNode(obj);
export default TreeNode;