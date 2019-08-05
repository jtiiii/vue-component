import Utils from './scripts/Utils';

const UploadImage = resolve => require(['./components/upload-image.vue'], resolve);
const ThirdQuill = resolve => require(['./components/third/quill.vue'], resolve);
const PageBar = resolve => require(['./components/page-bar.vue'], resolve);
const TreeNode = resolve => require(['./components/tree/tree-node.vue'], resolve);
const Panel = resolve => require(['./components/panel.vue'], resolve);
const Button = resolve => require(['./components/button.vue'], resolve);
const Modal = resolve => require(['./components/modal.vue'], resolve);
const Search = resolve => require(['./components/search/search.vue'], resolve);
const Thumbnail = resolve => require(['./components/thumbnail.vue'], resolve);
const Dropdown = resolve => require(['./components/dropdown.vue'], resolve);
const Cover = resolve => require(['./components/cover.vue'], resolve);
const Table = resolve => require(['./components/table.vue'], resolve);
const Selector = resolve => require(['./components/selector.vue'],resolve);
const Hint = resolve => require(['./components/hint.vue'],resolve );
const Text = resolve => require(['./components/input-text.vue'],resolve);
const File = resolve => require(['./components/input-file.vue'],resolve);
const Switch = resolve => require(['./components/input-switch.vue'],resolve);

import TreeNodeModel from "./components/tree/TreeNode";


const vueComponents = {
    TreeNode,
    Button,
    Panel,
    Modal,
    Search,
    Input:{ Text, File, Switch},
    Upload:{ Image: UploadImage},
    Thumbnail,
    Third:{ Quill: ThirdQuill},
    Dropdown,
    PageBar,
    Cover,
    Table,
    Selector,
    Hint};
const Model = {
    TreeNode: TreeNodeModel
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