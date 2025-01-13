<template>
  <div id="app">
    <arc-head />
    <nuxt-page class="page" />
    <arc-footer />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
// global
@use 'element-plus/theme-chalk/dark/css-vars.css' as *;
@use '~/assets/css/element.scss' as *;
@use '~/assets/css/global.scss' as *;
</style>
