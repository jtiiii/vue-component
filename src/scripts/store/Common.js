import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const CommonStore = new Vuex.Store({
    state:{
        style:{
            color: 'bootstrap',
            corner: 'circle',
            /**
             * 配色
             * 目前只有bootstrap风格的配色
             */
            colors: [ 'bootstrap'],
            /**
             * 边框角落风格
             * circle - 圆角
             * square - 方角
             */
            corners: ['circle','square']
        }
    }
});

export default CommonStore;