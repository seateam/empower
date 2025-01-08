<template>
  <div id="mokoko-play">
    <div v-html="htmlContent"></div>
  </div>
</template>
<script setup lang="ts">
import htmlContent from './demo.html'
</script>
<style lang="scss" scoped>
#mokoko-play {
  padding: 0;
  width: 100%;
  font-family: 'Poppins-Bold';
  padding-bottom: 100px;
  .page-content {
    padding: 0 20px;
    width: 100%;
    .earn-banner {
      width: 100%;
    }
    .carousel-wrapper,
    .el-carousel {
      width: 100%;
      height: 167px;
      --el-carousel-indicator-width: 26px;
      --el-carousel-indicator-height: 6px;
    }
    .carousel-image {
      width: 100%;
      height: 167px;
      object-fit: fill;
      margin: auto;
    }
    .el-carousel__item {
      // margin-bottom: 20px;
      border-radius: 8px;
      width: 100%;
      height: 167px;
    }
    .task-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .task-card {
      font-family: Poppins;
      padding: 7px;
      width: 100%;
      min-height: 179px;
      background: #202328;
      border-radius: 3px;
      display: flex;
      align-items: center;
      gap: 12px;
      .left-box {
        flex-shrink: 0;
        width: 128px;
        height: 160px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .right-box {
        padding: 6px 0;
        display: flex;
        height: 100%;
        min-height: 160px;
        flex-direction: column;
        gap: 6px;
        justify-content: space-between;
        .introduce {
          font-family: 'Poppins-Bold';
        }
        .tip {
          font-size: 11px;
        }
        .media-box {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .earn-btn {
          img {
            width: 20px;
            height: 18px;
            margin-right: 6px;
          }
        }
      }
    }
  }
  .top-banner {
    padding: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    position: relative;

    .earn-banner {
      width: 100%;
      position: absolute;
      top: -60px;
      z-index: -1;
      height: auto;
    }
    .earn-title {
      margin: 0 20px;
      width: 82px;
    }
  }
  .title-box {
    padding: 18px 0;
    display: flex;
    flex-direction: column;
    // align-items: center;
    width: 100%;
    img {
      width: 93px;
    }
  }
}
</style>
