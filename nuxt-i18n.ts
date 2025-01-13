import en from '~/lang/en-US.json'
import cn from '~/lang/zh-CN.json'
import zh from '~/lang/zh-TW.json'

// https://v8.i18n.nuxtjs.org
export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'cn',
    messages: {
      en,
      zh,
      cn,
    },
    fallbackLocale: ['en', 'zh', 'cn'],
  }
})
