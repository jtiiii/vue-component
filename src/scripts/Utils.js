const ArrayUtils = resolve => require(['./util/ArrayUtils'],resolve);
const NumberUtils = resolve => require(['./util/NumberUtils'],resolve);
const SizeUtils = resolve => require(['./util/SizeUtils'],resolve);
const VueUtils = resolve => require(['./util/VueUtils'],resolve);
const WindowUtils = resolve => require(['./util/WindowUtils'],resolve);
export default {
    ArrayUtils,NumberUtils,SizeUtils,VueUtils,WindowUtils
}