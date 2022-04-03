import { createApp } from 'vue';
import App from './App.vue';

/* vee-validate */
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min, min_value, max_value, integer, numeric } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

/* axios */
import axios from 'axios';
import VueAxios from 'vue-axios';

import router from './router';
import './styles/index.css';

// importing AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(AOS.init);

app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);

defineRule('required', required);
defineRule('email', email);
defineRule('min', min); // 最少要幾個字
defineRule('min_value', min_value); // 數字最小值
defineRule('max_value', max_value); // 數字最大值
defineRule('integer', integer); // 數字最大值
defineRule('numeric', numeric); // 數字最大值

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
// 設定語系為繁中
setLocale('zh_TW');

app.mount('#app');
