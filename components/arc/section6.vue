<template>
  <div id="teams">
    <div class="container">
      <h2 class="title">{{ $t('section6-title') }}</h2>
      <div class="box">
        <div class="box-container">
          <img src="/img/banner/first.png" alt="" />
          <h4>{{ $t('section6-text1') }}</h4>
          <p>5,000 +</p>
        </div>
        <div class="box-container">
          <img src="/img/banner/second.png" alt="" />
          <h4>{{ $t('section6-text2') }}</h4>
          <p>10,000 +</p>
        </div>
        <div class="box-container">
          <img src="/img/banner/third.png" alt="" />
          <h4>{{ $t('section6-text3') }}</h4>
          <p>30,000 +</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n()
</script>
<style lang="scss" scoped>
#teams {
  width: 100%;
  min-height: 600px;
  background-color: white;

  .container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    text-align: center;
    height: 226px;
    img {
      width: 82px;
      height: 82px;
    }

    .title {
      width: 100%;
      font-size: 32px;
      margin-top: 240px;
    }
    .box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;

      .box-container {
        width: 100%;
        text-align: center;
        padding: 40px 25px;
        box-sizing: border-box;
        box-shadow: 2px 2px 20px rgb(0 0 0 / 6%);
        h4 {
          color: rgb(134, 134, 134);
          font-size: 24px;
        }
        p {
          color: rgb(22, 81, 181);
          font-size: 48px;
          margin: 0;
        }
      }
    }
  }
}
</style>
