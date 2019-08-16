import Utils from './scripts/Utils';

const ThirdQuill = resolve => require(['./components/third/quill.vue'], resolve);
const Image = resolve => require(['./components/upload-image.vue'], resolve);
const PageBar = resolve => require(['./components/page-bar.vue'], resolve);
const Panel = resolve => require(['./components/panel.vue'], resolve);
const Button = resolve => require(['./components/button.vue'], resolve);
const Modal = resolve => require(['./components/modal.vue'], resolve);
const Thumbnail = resolve => require(['./components/thumbnail.vue'], resolve);
const Dropdown = resolve => require(['./components/dropdown.vue'], resolve);
const Cover = resolve => require(['./components/cover.vue'], resolve);
const Table = resolve => require(['./components/table.vue'], resolve);
const Selector = resolve => require(['./components/selector.vue'],resolve);
const Hint = resolve => require(['./components/hint.vue'],resolve );
const Text = resolve => require(['./components/input-text.vue'],resolve);
const File = resolve => require(['./components/input-file.vue'],resolve);
const Switch = resolve => require(['./components/input-switch.vue'],resolve);
const Tree = resolve => require(['./components/tree.vue'],resolve);
const Loading = resolve => require(['./components/loading-mask.vue'],resolve);
const Navigator = resolve => require(['./components/navigator.vue'], resolve);

const vueComponents = {
    Button,
    Panel,
    Modal,
    Tree,
    Input:{ Text, File, Switch},
    Upload:{ Image},
    Thumbnail,
    Third:{ Quill: ThirdQuill},
    Dropdown,
    PageBar,
    Cover,
    Table,
    Loading,
    Selector,
    Navigator,
    Hint
};
export {Utils};
export default vueComponents;