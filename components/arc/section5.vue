<template>
  <div id="contact">
    <div class="container">
      <el-carousel
        @change="handleCarouselChange"
        :interval="3000"
        trigger="click"
        indicator-position="none"
        :autoplay="true"
        class="custom-carousel"
        ref="carousel"
      >
        <el-carousel-item v-for="(item, index) in list" :key="index">
          <img :src="item.eventImg" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
      <div class="title-box" :class="`title-${currentIndex}`">
        <h2 class="title">{{ list[currentIndex].title }}</h2>
        <p class="subtitle">{{ list[currentIndex].subtitle }}</p>
      </div>
      <div class="tab-box">
        <div v-for="(item, index) in list" :key="index">
          <div
            v-if="index !== 0"
            class="tab"
            :class="{
              active: currentIndex === index,
              whiteColor: [0, 2, 4].includes(currentIndex),
            }"
            @click="goToSlide(index)"
          >
            <span class="tab-title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CarouselInstance } from 'element-plus'
const currentIndex = ref(0)
const carousel = ref<CarouselInstance | null>(null)
interface ListItem {
  title: string
  subtitle: string
  eventImg: string
}
const list: ListItem[] = [
  {
    title: 'GatherOne',
    subtitle: '精细化效果运营顶级代理商',
    eventImg: '/img/banner/1.png',
  },
  {
    title: '专注出海\n与市场需求洞察',
    subtitle:
      '我们专注于游戏与应用类产品出海，深入了解行业特点和市场需求，确保我们的服务能够精准匹配目标市场',
    eventImg: '/img/banner/2.png',
  },
  {
    title: '智能化技术\n与数据分析',
    subtitle: '我们注重智能化技术的研发与应用，通过先进的数据分析工具，提升营销效果，实现精准营销',
    eventImg: '/img/banner/3.png',
  },
  {
    title: '资深国际营销团队',
    subtitle:
      '我们拥有一支资深的海外市场营销团队，凭借丰富的国际市场营销经验，能够为客户提供全方位的市场分析和营销支持',
    eventImg: '/img/banner/4.png',
  },
  {
    title: '全球营销数据支持与SAAS工具',
    subtitle:
      '我们提供跨平台、跨地区的营销数据支持，帮助客户实现全球市场的精准定位。同时，我们提供SaaS营销工具，帮助客户提升营销效率和管理水平，使其在全球市场中更具竞争力',
    eventImg: '/img/banner/5.png',
  },
]
const handleCarouselChange = (index: number) => {
  currentIndex.value = index
}
const goToSlide = (index: number) => {
  currentIndex.value = index
  carousel.value?.setActiveItem(index)
}
</script>
<style lang="scss" scoped>
#contact {
  width: 100%;
  height: 920px;
  background-color: white;
  width: 100%;
  background-color: white;
  .container {
    margin: 0 auto;
    padding: 144px 0;
    width: 100%;
    max-width: 1440px;
    position: relative;
    .title-box {
      position: absolute;
      top: 50%;
      left: 350px;
      width: 550px;
      font-size: 38px;
      transform: translate(-50%, -50%);
      line-height: 1.1;
      .title {
        font-weight: 500;
      }
      .subtitle {
        font-weight: 400;
        font-size: 28px;
      }
    }
    .title-0,
    .title-2,
    .title-4,
    .whiteColor {
      color: white;
    }
    .tab-box {
      position: relative;
      display: flex;
      justify-content: center;
      margin-top: -200px;
      font-size: 20px;
      color: #1651b5;
      text-align: center;
      .tab {
        transition: all 0.3s;
        width: 240px;
        height: 180px;
        padding: 30px 20px;
        box-sizing: border-box;
        border: 1px solid hsla(0, 0%, 100%, 0.1);
        cursor: pointer;
        text-align: center;
        white-space: pre-line;

        &.active {
          background: hsla(0, 0%, 66%, 0.2);
        }

        .tab-title {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
