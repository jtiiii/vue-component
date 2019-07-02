import Utils from './scripts/Utils';
import Input from './scripts/components/input/input';
import Upload from './scripts/components/upload/Upload';
import Layout from './scripts/components/layout/layout';
import Editor from './scripts/components/editor/editor';
import CommonStore from './scripts/store/Common';


const TreeNode = resolve => require(['./scripts/components/tree/tree-node.vue'], resolve);
const Panel = resolve => require(['./scripts/components/panel/panel.vue'], resolve);
const Button = resolve => require(['./scripts/components/button/button.vue'], resolve);
const Modal = resolve => require(['./scripts/components/modal/modal.vue'], resolve);
const Search = resolve => require(['./scripts/components/search/search.vue'], resolve);
const Thumbnail = resolve => require(['./scripts/components/thumbnail/thumbnail.vue'], resolve);
const Dropdown = resolve => require(['./scripts/components/dropdown/dropdown.vue'], resolve);
const Cover = resolve => require(['./scripts/components/cover/cover.vue'], resolve);
const Table = resolve => require(['./scripts/components/table/table.vue'], resolve);
const Selector = resolve => require(['./scripts/components/selector/selector.vue'],resolve);
const Hint = resolve => require(['./scripts/components/hint/hint.vue'],resolve );

import ThumbnailModel from './scripts/components/thumbnail/ThumbnailModel';
import TreeNodeModel from "./scripts/components/tree/TreeNode";


const vueComponents = { TreeNode, Button, Panel, Modal, Search, Input, Upload, Thumbnail, Editor, Dropdown, Layout, Cover, Table, Selector, Hint};
const Model = {
    TreeNode: TreeNodeModel,
    Thumbnail: ThumbnailModel
};
const Store ={
    Common: CommonStore
};
// export function register(vue){
//     let keys = Object.keys(vueComponents);
//     keys.forEach( key => {
//         vue.component(vueComponents[key].name,vueComponents[key]);
//     });
// }
export {Model, Utils, Store};
export default vueComponents;