<template>
  <div id="about-us">
    <div class="about-us-box animate-in">
      <img src="/img/files/aboutus.jpg" alt="" />
      <div class="about-us-text">
        <div class="about-us-title">
          <h3>{{ $t('company-name') }}</h3>
          <p class="Subtitle">{{ $t('home-title') }}</p>
          <p>
            {{ $t('section2-title') }}
          </p>
          <p>
            {{ $t('section2-text1') }}<br />
            {{ $t('section2-text2') }}<br />
            {{ $t('section2-text3') }}
          </p>
        </div>
        <div class="about-us-p"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n()
</script>
<style lang="scss" scoped>
#about-us {
  width: 100%;
  background-color: white;
  .about-us-box {
    margin: 0 auto;
    padding-top: 144px;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    img {
      width: 540px;
      height: 489px;
    }
    .about-us-title {
      width: 620px;
      margin: 0 0 0 40px;

      h3 {
        font-size: 36px;
        line-height: 1.1;
        color: #045ea5;
        margin: 0;
      }

      .Subtitle {
        color: #045ea5;
        font-size: 36px;
        line-height: 1.8;
        margin: 0;
      }

      p {
        line-height: 1.8;
      }
    }
  }
}
</style>
