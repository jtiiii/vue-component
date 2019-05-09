import TreeNode from './components/tree/tree-node.vue';
import Panel from './components/panel/panel.vue';
import Button from './components/button/button.vue';
import Modal from './components/modal/modal.vue';
// import TreeNode from './components/tree/TreeNode';

// export const Model = {
//     TreeNode
// };

const vueComponents = { TreeNode, Button, Panel, Modal};
export function register(vue){
    let keys = Object.keys(vueComponents);

    keys.forEach( key => {
        vue.component(vueComponents[key].name,vueComponents[key]);
    });
}
export default vueComponents;