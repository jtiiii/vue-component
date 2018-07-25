import Vue from '$vue';
import vueComponents from './scripts/vue-component';

let keys = Object.keys(vueComponents);

keys.forEach( key => {
   Vue.component(key,vueComponents[key]);
});

window.Vue = Vue;
