<template>
  <div id="em-home">
    <div class="em-code animate-in">
      <h1>{{ $t('company-name') }}</h1>
      <div class="subtitle" :class="{ en: locale === 'en' }">{{ $t('home-title') }}</div>
      <div class="subtitle" :class="{ en: locale === 'en' }">
        {{ $t('home-subtitle1') + '|' + $t('home-subtitle2') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n()
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
#em-home {
  // height: 962px;
  width: 100vw;
  height: 100vh;
  background: url('/img/files/banner_bg.jpg');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  .em-code {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      padding: 30px 0;
      text-align: center;
      width: 1000px;
      font-size: 50px;
      border-bottom: 1px solid white;
    }
    .subtitle {
      font-size: 50px;
      font-weight: 500;
      margin-bottom: 24px;
    }
    .en {
      font-size: 30px;
    }
  }
}
</style>
