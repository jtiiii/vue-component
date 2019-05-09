import TreePage from './sample-tree.vue';

import Vue from '$vue';
new Vue({
    render( h){
        return h(TreePage)
    }
}).$mount('#tree');