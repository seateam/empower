export const useUserStore = defineStore({
  id: 'userStore',
  state: () => {
    return {
      languageActive: 0,
      languageList: [
        {
          label: '简体中文',
          value: 'cn',
          default: true,
        },
        {
          label: 'English ',
          value: 'en',
        },
        {
          label: '繁體中文',
          value: 'zh',
        },
      ],
    }
  },
  getters: {},
  actions: {},
})
