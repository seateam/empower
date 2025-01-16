<template>
  <div id="em-footer">
    <div class="foot">
      <div class="ftLeft">
        <p>{{ $t('footer-address') }}</p>
        <p>{{ $t('footer-phone') }}</p>
      </div>
      <div class="ftRight">
        <img src="/img/files/ewm.png" />
        <span>{{ $t('company-name') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n()
</script>
<style lang="scss" scoped>
#em-footer {
  margin-top: 120px;
  width: 100%;
  background: #373737;

  .foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    text-align: left;
    color: #fff;
    a {
      color: #fff;
    }
    .ftRight {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
