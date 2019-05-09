import Vue from '$vue';
import vueComponents from './scripts/vue-component';
import * as vc  from './scripts/vue-component';

console.info(vc);

let keys = Object.keys(vueComponents);

keys.forEach( key => {
   Vue.component(vueComponents[key].name,vueComponents[key]);
});

window.Vue = Vue;
