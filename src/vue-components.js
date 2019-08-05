import Utils from './scripts/Utils';
import Input from './components/input';
import Upload from './components/upload/Upload';
import Editor from './components/editor/editor';


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

import TreeNodeModel from "./components/tree/TreeNode";


const vueComponents = {
    TreeNode,
    Button,
    Panel,
    Modal,
    Search,
    Input,
    Upload,
    Thumbnail,
    Editor,
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