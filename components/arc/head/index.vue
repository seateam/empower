<template>
  <div
    id="em-head"
    :style="{ backgroundColor: headerBackground }"
    :class="{ theme: headerOpacity === 1, 'theme-contact': isContactRoute }"
  >
    <div class="em-head-box">
      <nuxt-link to="/">
        <img src="/img/files/clogo.png" alt="" />
      </nuxt-link>

      <ul>
        <li>
          <nuxt-link to="/" :class="{ active: isActive('/') }"> 首页 </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/#about-us" :class="{ active: isAnchorActive('#about-us') }">
            关于我们
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/#company" :class="{ active: isAnchorActive('#company') }">
            公司业务
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" :class="{ active: isActive('/contact') }"> 联系我们 </nuxt-link>
        </li>
      </ul>

      <div class="right">
        <div class="language-switch">
          <nuxt-link to="">EN</nuxt-link>
          <nuxt-link to="">繁</nuxt-link>
          <nuxt-link to="">简</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { useRoute } from 'vue-router'

const route = useRoute()
const { y } = useWindowScroll()

const headerOpacity = ref(0)
const isActive = (path: string) => route.path === path && !window.location.hash
const isAnchorActive = (hash: string) => window.location.hash === hash

const isContactRoute = computed(() => route.path === '/contact')

watch(y, (newY) => {
  if (!isContactRoute.value) {
    headerOpacity.value = newY <= 0 ? 0 : 1
  } else {
    headerOpacity.value = 1
  }
})

const headerBackground = computed(
  () =>
    isContactRoute.value
      ? 'rgba(255, 255, 255, 1)'
      : headerOpacity.value === 1
      ? 'rgba(255, 255, 255, 1)' // 滚动超过一定距离背景为白色
      : `rgba(255, 255, 255, ${headerOpacity.value * 0.65})`, // 滚动未超过 64px 背景逐渐透明
)
</script>
<style lang="scss" scoped>
#em-head {
  width: 100%;
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  z-index: 1000;
  a {
    display: flex;
    float: left;
    align-items: center;
    text-align: center;
    color: white;
    &:hover {
      color: #f97310;
    }
  }
  .em-head-box {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1200px;

    ul {
      display: flex;
      align-items: center; /* 垂直居中 */
      justify-content: space-between;
      margin: 0;
      padding: 0;
      list-style: none;
      width: 642px;
      a.active {
        color: #f97310;
      }

      li {
        padding: 0 10px;
      }
    }
    .right {
      a {
        border-right: 1px solid #cacaca;
        padding: 0 10px;
        font-size: 14px;
      }
    }
  }
}
#em-head.theme,
#em-head.theme-contact {
  a {
    color: #333;
    &:hover {
      color: #f97310;
    }
  }
}
</style>
