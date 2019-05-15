import expandIcon from './expand.png';

function TreeNode({id, type , text = '', children = [], canClick = true, canOpen = false}){
    this.id = id;
    this.text =text;
    this.children = [];
    children.forEach( child => this.children.push(TreeNode.of(child)));
    this.type = type? 'default': type;
    this.canClick = canClick;
    this.canOpen = canOpen? canOpen: this.children.length !== 0;
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
        },
        generation:{
            type: Number,
            required: false,
            default: 0
        }
    },
    data(){
        return {
            expandIcon: expandIcon,
            expandStatus: false
        };
    },
    computed:{
        expandStyle(){
            if(this.expandStatus && this.node.canOpen){
                return { 'transform': 'rotate(270deg)' ,'cursor': 'pointer' };
            }
            if(this.node.canOpen){
                return { 'cursor': 'pointer' };
            }
            return { 'opacity': 0};
        },
        hasChildren (){
            return this.children && (this.children instanceof Array ) &&  this.children.length !== 0;
        },
        canClick (){
            return this.node.canClick instanceof Boolean? this.node.canClick : true;
        },
        children (){
            return this.node.children instanceof Array ? this.node.children : [];
        },
        classType (){
            switch (this.node.type){
                case 'success': return {'title-success' : true};
                case 'info': return {'title-success' : true};
                case 'warning': return {'title-warning' : true};
                case 'danger': return {'title-danger' : true};
                    default : return{ 'title-default': true};
            }
        }
    },
    methods: {
        expand(){
            this.expandStatus = !this.expandStatus;
            if(this.expandStatus){
                this.$emit('expand',this.node);
            }
        }
    }
};

export default TreeNode;