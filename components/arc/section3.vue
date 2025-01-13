<template>
  <div id="company">
    <div class="container">
      <h2 class="title">{{ $t('section3-title') }}</h2>
      <div class="grid">
        <div v-for="n in 8" class="grid-item">
          <img
            :src="`/img/files/dls${n === 8 ? n + '.png' : n + '.jpg'}`"
            alt="img"
            class="media-logo"
          />
        </div>
      </div>
      <div class="footer">
        <div class="text">
          <div class="number">19</div>
          <span>{{ $t('section3-text1') }}</span>
        </div>
        <div class="text">
          <div class="number">50<span class="add">+</span></div>
          <span>{{ $t('section3-text2') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n()
</script>
<style lang="scss" scoped>
#company {
  width: 100%;
  background-color: white;
  padding-top: 50px;
  .container {
    margin: 0 auto;
    padding: 144px 0;
    max-width: 1200px;
    width: 100%;
  }

  .container {
    text-align: center;
    padding: 20px;
  }

  .title {
    font-size: 32px;
    margin-bottom: 50px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 50px 0;
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .media-logo {
    margin-bottom: 45px;
    width: 300px;
    height: 48px;
  }

  .footer {
    display: flex;
    justify-content: space-around;
  }

  .number {
    font-size: 48px;
    font-weight: bold;
    color: #045ea5;
  }
  .text {
    display: inline-flex;
    gap: 20px;
    line-height: 1;
    .add {
      color: #045ea5;
      font-size: 20px;
      font-family: Helvetica, sans-serif;
    }
    span {
      vertical-align: top;
      font-size: 16px;
    }
  }
}
</style>
