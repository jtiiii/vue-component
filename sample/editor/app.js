import Vue from '$vue';
import Editor from './sample-editor.vue';

new Vue({
    render: h => h(Editor)
}).$mount('#editor');