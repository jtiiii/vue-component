import Utils from './Utils';

const TreeNode = resolve => require(['./components/tree/tree-node.vue'], resolve);
const Panel = resolve => require(['./components/panel/panel.vue'], resolve);
const Button = resolve => require(['./components/button/button.vue'], resolve);
const Modal = resolve => require(['./components/modal/modal.vue'], resolve);
const Search = resolve => require(['./components/search/search.vue'], resolve);
const Input = resolve => require(['./components/input/input'], resolve);
const Upload = resolve => require(['./components/upload/Upload'], resolve);
const Thumbnail = resolve => require(['./components/thumbnail/thumbnail.vue'], resolve);
const Editor = resolve => require(['./components/editor/editor'], resolve);
const Dropdown = resolve => require(['./components/dropdown/dropdown.vue'], resolve);
const Layout = resolve => require(['./components/layout/layout'], resolve);
const Cover = resolve => require(['./components/cover/cover.vue'], resolve);
const ThumbnailModel = resolve => require(['./components/thumbnail/ThumbnailModel'], resolve);
const TreeNodeModel = resolve => require(["./components/tree/TreeNode"], resolve);
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