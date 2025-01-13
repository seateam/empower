<template>
  <div id="em-home">
    <div class="em-code animate-in">
      <h1>力盟科技集团</h1>
      <div class="subtitle">中国专业的跨境数字营销集团</div>
      <div class="subtitle">足不出户|营销全球</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#em-home {
  height: 962px;
  background: url('/img/files/banner_bg.jpg');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  }
}
</style>
