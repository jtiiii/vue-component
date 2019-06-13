import Utils from './Utils';
import Input from './components/input/input';
import Upload from './components/upload/Upload';
import Layout from './components/layout/layout';

const TreeNode = resolve => require(['./components/tree/tree-node.vue'], resolve);
const Panel = resolve => require(['./components/panel/panel.vue'], resolve);
const Button = resolve => require(['./components/button/button.vue'], resolve);
const Modal = resolve => require(['./components/modal/modal.vue'], resolve);
const Search = resolve => require(['./components/search/search.vue'], resolve);
const Thumbnail = resolve => require(['./components/thumbnail/thumbnail.vue'], resolve);
const Editor = resolve => require(['./components/editor/editor'], resolve);
const Dropdown = resolve => require(['./components/dropdown/dropdown.vue'], resolve);
const Cover = resolve => require(['./components/cover/cover.vue'], resolve);

import ThumbnailModel from './components/thumbnail/ThumbnailModel';
import TreeNodeModel from "./components/tree/TreeNode";
// export const Model = {
//     TreeNode
// };

const vueComponents = { TreeNode, Button, Panel, Modal, Search, Input, Upload, Thumbnail, Editor, Dropdown, Layout, Cover};
const Model = {
    TreeNode: TreeNodeModel,
    Thumbnail: ThumbnailModel
};
// export function register(vue){
//     let keys = Object.keys(vueComponents);
//     keys.forEach( key => {
//         vue.component(vueComponents[key].name,vueComponents[key]);
//     });
// }
export {Model,Utils};
export default vueComponents;