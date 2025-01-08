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
      title: 'MOKOKOBOT',
      meta: [
        {
          name: 'description',
          content: 'MOKOKOBOT',
        },
      ],
      link: [{ rel: 'icon', href: '/logo.svg' }],
      // https://bytedance.feishu.cn/wiki/wikcnJZV45hM71QgI60iwkzvXob

      script: [
        { defer: true, src: 'https://telegram.org/js/telegram-web-app.js' },
        { type: 'text/javascript', src: 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js' },
      ],
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  // modules
  modules: ['@element-plus/nuxt', '@pinia/nuxt', '@nuxtjs/color-mode', '@nuxtjs/device'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },

  // https://content.nuxtjs.org/examples/mdc/nested-components
  components: [{ path: '~/components', global: true }],

  elementPlus: { importStyle: 'scss' },

  plugins: [{ src: '~/plugins/vConsole.js', mode: 'client' }],

  devServer: {
    host: 'localhost',
    port: 6000,
  },
})
