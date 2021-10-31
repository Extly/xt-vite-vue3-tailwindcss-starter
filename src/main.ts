import { createApp } from '@vue/runtime-dom';
import { createHead } from '@vueuse/head';
import App from '@/App.vue';
import '@/styles/index.postcss';
import { i18n } from './modules/i18n';
import { pinia } from './modules/pinia';
import { router } from './modules/router';

const app = createApp(App)
  .use(router)
  .use(i18n)
  .use(pinia)
  .use(createHead());

router
  .isReady()
  .then(() => app.mount('#app'))
  .catch(() => {
    console.error('Error mounting app');
  });
