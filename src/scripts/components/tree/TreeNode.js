function TreeNode({id, type , text = '', children = [],extensions = undefined, canClick = true, canOpen = false, select = false}){
    this.id = id;
    this.text =text;
    this.resetChildren(children);
    this.type = type || 'default';
    this.canClick = canClick;
    this.select = select;
    this.extensions = extensions;
    this.canOpen = canOpen? canOpen: this.children.length !== 0;
    this.parent = null;
}
TreeNode.prototype = {
    constructor : TreeNode,
    addChildren( node ){
        let c = TreeNode.of(node);
        this.children.push(c);
        c.parent = this;
    },
    resetChildren( nodes ){
        this.children = [];
        nodes.forEach( node => {
            this.addChildren(node);
        });
    },
};
TreeNode.of = obj => obj instanceof TreeNode? obj: new TreeNode(obj);
export default TreeNode;