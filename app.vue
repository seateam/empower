<template>
  <div id="app">
    <arc-head />
    <nuxt-page class="page" />
    <arc-footer />
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n()
const userStore = useUserStore()

onMounted(() => {
  let language = localStorage.getItem('language') || navigator.language.substring(0, 2)
  if (language === 'cn') {
    locale.value = language
  } else if (language === 'zh') {
    locale.value = language
  } else {
    locale.value = 'en'
  }
  userStore.languageActive = userStore.languageList.findIndex((e) => e.value === language)
  localStorage.setItem('language', language)
})
</script>
<style lang="scss">
// global
@use 'element-plus/theme-chalk/dark/css-vars.css' as *;
@use '~/assets/css/element.scss' as *;
@use '~/assets/css/global.scss' as *;
</style>
