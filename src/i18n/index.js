import { createI18n } from 'vue-i18n';
import tw from './tw';
import en from './en';
import cn from './cn';
import vn from './vn';
/* eslint new-cap: ["error", { "newIsCap": false }] */
const i18n = createI18n({
  locale: 'tw',
  legacy: false,
  globalInjection: true,
  messages: {
    tw,
    en,
    cn,
    vn,
  },
  fallbackLocale: 'en',
});
export default i18n;
