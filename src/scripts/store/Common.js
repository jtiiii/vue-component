import Vue from 'vue/dist/vue.runtime.min';
import Vuex from 'vuex';
Vue.use(Vuex);

const CommonStore = new Vuex.Store({
    state:{
        style:{
            emotion: 'bootstrap',
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
    },
    mutations:{
        cornerToCircle(state){
            state.style.corner = 'circle';
        },
        cornerToSquare(state){
            state.style.corner = 'square';
        }
    }
});
export default CommonStore;