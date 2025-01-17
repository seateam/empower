export const useUserStore = defineStore({
  id: 'userStore',
  state: () => {
    return {
      languageActive: 0,
      languageList: [
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
