import api from '~/utils/api/api'
import axios from 'axios'
const { VITE_TGBOT_TOKEN } = import.meta.env
export interface TelegramUser {
  id: string
  username: string
  email: string
  twitterId: number
  twitterUsername: string
  point: number
  joinArChannel: number
  joinArGroup: number
  followArX: number
  retweetMileStones: number
  retweetCollab: number
  watchVideo: number
  watchAofWebsite: number
  followAofX: number
  retweetAofX: number
  retweetAofX2: number
  joinAofGroup: number
  subscribeAofChannel: number
  download: number
  createTime: ''
}
export const useUserStore = defineStore({
  id: 'userStore',
  state: () => {
    return {
      // firstPath: route.path,
      avatar: '',
      userTgInfo: {
        photo_url: '',
        allows_write_to_pm: true,
        first_name: '',
        id: null,
        language_code: '',
        last_name: '',
        username: '',
      },
      mokoPoint: 0,
      userId: 0,
      eventList: [
        {
          eventNo: 1001,
          eventName: 'evt 1',
          eventImg: 'https://cdn.majyo.vip/mkp_ginfo/mj.png?x-oss-process=style/orig',
          eventDesc: 'Rank in the top 10 to split a pool of 700 #SEI',
          eventUrl: 'https://x.com/CandyDreams_M/status/1852250082864730430',
          eventIndex: 1,
          status: 1,
        },
      ],
      gameList: [
        {
          gameName: 'Majyo测试',
          mokoBot: 1,
          gameDesc:
            "A first RPG mini-game on #Telegram, featuring Telegram's social features and Web3 GameFi.",
          gameIcon: 'https://cdn.majyo.vip/mkp_ginfo/logo/majyo.png?x-oss-process=style/orig',
          gamePhoto: 'https://cdn.majyo.vip/mkp_ginfo/mj.png?x-oss-process=style/orig',
          twUrl: 'https://x.com/MajyoGame',
          groupUrl: 'https://t.me/MajyoTreasure',
          botUrl: 'https://t.me/MajyoTreasureBot',
        },
      ],
      taskList: [
        {
          operateStatus: 1,
          status: 1,
          taskType: 1,
          taskId: 1001,
          rewards: 5,
          visitUrl: '',
          verfyId: '',
          name: 'Login',
        },
      ],
      pointsList: [
        {
          taskId: 1001,
          taskType: 1,
          taskName: 'Login',
          point: 5,
        },
      ],
      myInvite: [
        {
          nickName: '',
          avatar: '',
          rebate: 10,
        },
      ],
    }
  },
  getters: {},
  actions: {
    async initLogin(initData: string, startApp?: string) {
      // const decodedData = decodeURIComponent(initData)
      try {
        const res = await api({
          method: 'post',
          url: '/LoginByTWA',
          data: {
            initData,
            startApp: startApp ? startApp : '',
          },
        })
        if (res.data.code === 0) {
          console.log('token', res.data.data.token)
          localStorage.setItem('token', res.data.data.token)
          this.mokoPoint = res.data.data.mokoPoint
          this.userId = res.data.data.userId
          this.getEventList()
          this.getGameList()
          this.getTaskList()
          this.getMyInvite()
          this.getTaskHistory()
        }
      } catch (e) {
        console.error('Error during init data', e)
      }
    },
    async update() {
      this.getTaskList()
      this.getTaskHistory()
    },

    async getEventList() {
      try {
        const res = await api({
          method: 'post',
          url: '/EventList',
        })
        if (res.data.code === 0) {
          console.log('EventList', res.data.data)
          this.eventList = res.data.data
        }
      } catch (e) {
        console.error('Error during get eventList', e)
      }
    },
    async getGameList() {
      try {
        const res = await api({
          method: 'post',
          url: '/GameList',
        })
        if (res.data.code === 0) {
          console.log('gameList', res.data.data)
          this.gameList = res.data.data
        }
      } catch (e) {
        console.error('Error during get GameList', e)
      }
    },
    async getTaskList() {
      try {
        const res = await api({
          method: 'post',
          url: '/TaskList',
        })
        if (res.data.code === 0) {
          console.log('taskList', res.data.data)
          this.taskList = res.data.data
        }
      } catch (e) {
        console.error('Error during get TaskList', e)
      }
    },
    async completeTask(operate: 'event' | 'game' | 'task', taskId: number) {
      try {
        const res = await api({
          method: 'post',
          url: '/CompleteTask',
          data: {
            operate,
            taskId,
          },
        })
        if (res.data.code === 0) {
          console.log('token', res.data.data)
          this.update()
        }
      } catch (e) {
        console.error('Error during completeTask', e)
      }
    },
    async claimTask(taskId: number) {
      try {
        const res = await api({
          method: 'post',
          url: '/GetReward',
          data: {
            taskId,
          },
        })
        if (res.data.code === 0) {
          console.log('token', res.data.data)
          this.update()
        }
      } catch (e) {
        console.error('Error during claimTask', e)
      }
    },
    async getTaskHistory() {
      try {
        const res = await api({
          method: 'post',
          url: '/TaskLog',
        })
        if (res.data.code === 0) {
          console.log('TaskLog', res.data.data)
          this.pointsList = res.data.data
        }
      } catch (e) {
        console.error('Error during getTaskHistory', e)
      }
    },
    async getMyInvite() {
      try {
        const res = await api({
          method: 'post',
          url: '/MyInvite',
        })
        if (res.data.code === 0) {
          console.log('MyInvite', res.data.data)
          this.pointsList = res.data.data
        }
      } catch (e) {
        console.error('Error during getMyInvite', e)
      }
    },
  },
})
