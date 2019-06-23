import Vue from '$vue';

import SampleSelector from './sample-selector.vue';
new Vue({
    render: h => h(SampleSelector)
}).$mount('#selector');