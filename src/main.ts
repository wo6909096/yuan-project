import { createApp } from 'vue';
import App from './App.vue';

import Store from './store/index';
import Router from './router/index';

createApp(App).use(Router).use(Store).mount('#app');
