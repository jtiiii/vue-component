import Panel from "./sample-panel.vue";
import Vue from '$vue';

new Vue({
    render( h){
        return h(Panel)
    }
}).$mount('#panel');