<template>
  <div id="archloot-footer-bar">
    <div class="footer-box">
      <nuxt-link
        v-for="(item, index) in footerMenus"
        :key="index"
        :to="item.path"
        class="nav-box"
        :class="{
          active: currentRoute.toString() === item.path,
          'middle-icon': item.name === 'Task',
        }"
      >
        <img
          :src="currentRoute === item.path ? item.activeIcon : item.icon"
          :alt="item.name"
          class="icon-img"
        />
        <span class="text-2xl">{{ item.name }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const currentRoute = ref(route.path)
const updateCurrentRoute = () => {
  currentRoute.value = route.path
}

onMounted(() => {
  updateCurrentRoute()
  router.afterEach((to) => {
    currentRoute.value = to.path
  })
})
const footerMenus = [
  {
    name: 'play',
    path: '/',
    icon: '/img/moko/play.svg',
    activeIcon: '/img/moko/play-focus.svg',
  },
  {
    name: 'earn',
    path: '/earn',
    icon: '/img/moko/earn.svg',
    activeIcon: '/img/moko/earn-focus.svg',
  },
  {
    name: 'invite',
    path: '/invite',
    icon: '/img/moko/invite.svg',
    activeIcon: '/img/moko/invite-focus.svg',
  },
  {
    name: 'me',
    path: '/me',
    icon: '/img/moko/me.svg',
    activeIcon: '/img/moko/me-focus.svg',
  },
]
</script>

<style lang="scss" scoped>
#archloot-footer-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 78px;
  padding-top: 10px;
  z-index: 1;
  background: #131417;
  .footer-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    font-family: 'SF Pro';
    gap: 20px;
    .nav-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      span {
        color: #d9d9d9;
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
    .active {
      span {
        color: #44e7c1;
      }
    }
  }
}
</style>
