import en from '~/lang/en-US.json'
import zh from '~/lang/zh-TW.json'

// https://v8.i18n.nuxtjs.org
export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'en',
    messages: {
      en,
      zh,
    },
    fallbackLocale: ['en', 'zh'],
  }
})
