function asyncLoad( path ){
    return resolve => require([path],resolve);
}

const ArrayUtils = asyncLoad('./util/ArrayUtils');
const NumberUtils = asyncLoad('./util/NumberUtils');
const SizeUtils = asyncLoad('./util/SizeUtils');
const VueUtils = asyncLoad('./util/VueUtils');
const WindowUtils = asyncLoad('./util/WindowUtils');
export default {
    ArrayUtils,NumberUtils,SizeUtils,VueUtils,WindowUtils
}