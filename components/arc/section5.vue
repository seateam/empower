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
        <p class="subtitle" :class="{ en: locale === 'en' }">{{ list[currentIndex].subtitle }}</p>
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
            <img
              :src="
                currentIndex === index
                  ? item.tabImgActive
                  : [0, 2, 4].includes(currentIndex)
                  ? item.tabImg
                  : item.tabImgMid
              "
              class="image"
            />
            <span class="tab-title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CarouselInstance } from 'element-plus'
const { locale } = useI18n()
const currentIndex = ref(0)
const { t: $t } = useI18n()
const carousel = ref<CarouselInstance | null>(null)
const list = computed(() => [
  {
    title: $t('section5-title-list1'),
    subtitle: $t('section5-subtitle-list1'),
    eventImg: '/img/banner/1.png',
    tabImg: '/img/banner/2-common.png',
    tabImgActive: '/img/banner/2-active.png',
    tabImgMid: '/img/banner/2-mid.png',
  },
  {
    title: $t('section5-title-list2'),
    subtitle: $t('section5-subtitle-list2'),
    eventImg: '/img/banner/2.png',
    tabImg: '/img/banner/2-common.png',
    tabImgActive: '/img/banner/2-active.png',
    tabImgMid: '/img/banner/2-mid.png',
  },
  {
    title: $t('section5-title-list3'),
    subtitle: $t('section5-subtitle-list3'),
    eventImg: '/img/banner/3.png',
    tabImg: '/img/banner/3-common.png',
    tabImgActive: '/img/banner/3-active.png',
    tabImgMid: '/img/banner/3-mid.png',
  },
  {
    title: $t('section5-title-list4'),
    subtitle: $t('section5-subtitle-list4'),
    eventImg: '/img/banner/4.png',
    tabImg: '/img/banner/4-common.png',
    tabImgActive: '/img/banner/4-active.png',
    tabImgMid: '/img/banner/4-mid.png',
  },
  {
    title: $t('section5-title-list5'),
    subtitle: $t('section5-subtitle-list5'),
    eventImg: '/img/banner/5.png',
    tabImg: '/img/banner/5-common.png',
    tabImgActive: '/img/banner/5-active.png',
    tabImgMid: '/img/banner/5-mid.png',
  },
])
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
      .subtitle.en {
        font-size: 20px;
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
      margin-top: -210px;
      font-size: 20px;
      color: #1651b5;
      text-align: center;
      .tab {
        transition: all 0.3s;
        width: 240px;
        height: 190px;
        padding: 30px 20px;
        box-sizing: border-box;
        border: 1px solid hsla(0, 0%, 100%, 0.1);
        cursor: pointer;
        text-align: center;
        white-space: pre-line;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        &.active {
          background: hsla(0, 0%, 66%, 0.2);
        }

        .tab-title {
          font-size: 16px;
          font-weight: bold;
        }
        img {
          width: 56px;
        }
      }
    }
  }
}
</style>
