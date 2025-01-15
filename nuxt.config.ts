// const { execSync } = require('child_process')
// let branch = ''
// if (process.env.VERCEL_GIT_COMMIT_REF) {
//   branch = process.env.VERCEL_GIT_COMMIT_REF
// } else {
//   branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
// }
// console.log('The branch is:', branch)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'HeatWave',
      meta: [
        {
          name: 'description',
          content: 'HeatWave',
        },
      ],
      link: [{ rel: 'icon', href: '/logo.png' }],
      // https://bytedance.feishu.cn/wiki/wikcnJZV45hM71QgI60iwkzvXob
    },
  },

  experimental: {
    payloadExtraction: false,
  },
  ssr: false,
  // modules
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
  i18n: {
    vueI18n: './nuxt-i18n.ts',
  },
  // https://content.nuxtjs.org/examples/mdc/nested-components
  components: [{ path: '~/components', global: true }],

  elementPlus: { importStyle: 'scss' },

  devServer: {
    host: 'localhost',
    port: 3000,
  },
})
