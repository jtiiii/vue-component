import TreeNode from './components/tree/tree-node.vue';
import Panel from './components/panel/panel.vue';
import Button from './components/button/button.vue';
import Modal from './components/modal/modal.vue';
import Search from './components/search/search.vue';
import Input from './components/input/input';
import Upload from './components/upload/Upload';
import Thumbnail from './components/thumbnail/thumbnail.vue';
import Editor from './components/editor/editor';
import Dropdown from './components/dropdown/dropdown.vue';

import ThumbnailModel from './components/thumbnail/ThumbnailModel';
import TreeNodeModel from './components/tree/TreeNode';

// export const Model = {
//     TreeNode
// };

const vueComponents = { TreeNode, Button, Panel, Modal, Search, Input, Upload, Thumbnail, Editor, Dropdown};
const Model = {
    TreeNode: TreeNodeModel,
    Thumbnail: ThumbnailModel
};
export function register(vue){
    let keys = Object.keys(vueComponents);
    keys.forEach( key => {
        vue.component(vueComponents[key].name,vueComponents[key]);
    });
}
export {Model};
export default vueComponents;