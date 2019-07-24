import expandIcon from './expand.png';
import TreeNode from './TreeNode';

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
            if(this.node.select){
                return { 'select': true} ;
            }
            switch (this.node.type){
                case 'success': return {'title-success' : true};
                case 'info': return {'title-info' : true};
                case 'warning': return {'title-warning' : true};
                case 'danger': return {'title-danger' : true};
                default : return{ 'title-default': true};
            }
        },

    },
    methods: {
        expand(){
            if(!this.node.canOpen){
                return;
            }
            this.expandStatus = !this.expandStatus;
            if(this.expandStatus){
                this.$emit('expand',this.node);
            }
        },
        nodeClick(){
            this.$emit('node-click',this.node);
        },
        sonClick( son ){
            this.$emit('node-click', son);
        },
        sonExpand( son ){
            this.$emit('expand', son);
        }
    }
};

export default TreeNode;