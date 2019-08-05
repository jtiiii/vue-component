import Utils from './scripts/Utils';
import Input from './components/input';
import Upload from './components/upload/Upload';
import Layout from './components/layout/layout';
import Editor from './components/editor/editor';
// import CommonStore from './scripts/store/Common';


const TreeNode = resolve => require(['./components/tree/tree-node.vue'], resolve);
const Panel = resolve => require(['./components/panel.vue'], resolve);
const Button = resolve => require(['./components/button.vue'], resolve);
const Modal = resolve => require(['./components/modal.vue'], resolve);
const Search = resolve => require(['./components/search/search.vue'], resolve);
const Thumbnail = resolve => require(['./components/thumbnail/thumbnail.vue'], resolve);
const Dropdown = resolve => require(['./components/dropdown.vue'], resolve);
const Cover = resolve => require(['./components/cover/cover.vue'], resolve);
const Table = resolve => require(['./components/table.vue'], resolve);
const Selector = resolve => require(['./components/selector.vue'],resolve);
const Hint = resolve => require(['./components/hint.vue'],resolve );

import ThumbnailModel from './components/thumbnail/ThumbnailModel';
import TreeNodeModel from "./components/tree/TreeNode";


const vueComponents = { TreeNode, Button, Panel, Modal, Search, Input, Upload, Thumbnail, Editor, Dropdown, Layout, Cover, Table, Selector, Hint};
// const vueComponents = {};
const Model = {
    TreeNode: TreeNodeModel,
    Thumbnail: ThumbnailModel
};
// const Store ={
//     Common: CommonStore
// };
// export function register(vue){
//     let keys = Object.keys(vueComponents);
//     keys.forEach( key => {
//         vue.component(vueComponents[key].name,vueComponents[key]);
//     });
// }
export {Model, Utils};
export default vueComponents;