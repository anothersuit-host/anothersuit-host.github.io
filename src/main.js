import Vue from 'vue';
import VueMeta from 'vue-meta'

import App from './App';
import { router } from './router';

Vue.use(VueMeta);

new Vue({
	el: '#app',
	template: '<app></app>',
	components: { App },
	router
}).$mount('#app');