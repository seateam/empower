import { get, post } from './apiAxios'
import qs from 'qs'
export const tgVerifyLogin = (str: string) => post('/user/tgVerify',qs.stringify({
    "data": str
}),20000,'urlencoded');

// name: tw / dc
export const twitterOrDiscordBind = (code: string, name: string) => post(`/user/${name}Bind`,qs.stringify({
    "code": code
}),-1,'urlencoded');

// name: tw / dc
export const twitterOrDiscordRefresh = (token: string, name: string) => post(`/user/refresh${name == 'dc' ? 'Dc':'Tw'}Token`,qs.stringify({
    "refreshToken": token
}),-1,'urlencoded');

export const isCompleted = () => get('/user/tgUser');

// Query and update discord join information
export const isJoinDiscord = (token: string) => post('/user/isJoinDc',qs.stringify({
    "accessToken": token
}),-1,'urlencoded');

export const taskAmount = () => get('/user/taskAmount');

export const watchUpdate = (name: string) => post(`/user/watch${name}`);

// id 6、7、8、9
export const queryDailyTask = () => get('/user/dailyTask');

export const getClickFPTask = () => get('/user/clickTask');
export const clickFPUpdate = (n: number) => post('/user/taskReward',qs.stringify({
    "count": n
}),-1,'urlencoded');

export const inviteRefresh = (n: number) => post('/user/inviteFr',qs.stringify({
    "count": n
}),-1,'urlencoded');

export const twFollow = () => post('/user/twFollow');

export const commentTwitter = () => post('/user/updateDaily',qs.stringify({
    "taskId": 8
}),-1,'urlencoded');

// name - retweete , like
interface twDataType {
    token: string,
    id: string,
    name: string
}
export const likeOrRetweetTwitter = (data: twDataType) => post(`/user/${data.name}`,qs.stringify({
    "token": data.token,
    "tweetId": data.id
}),-1,'urlencoded');

export const getQuizNum = () => get('/user/question')
export const getQuizReward = () => post('/user/answer')

export const getGamers = () => get('/user/getAssist')
// id: 1-human 2-deity
export const setGamers = (id: string) => post('/user/assist',qs.stringify({
    "team": id,
}),-1,'urlencoded');


