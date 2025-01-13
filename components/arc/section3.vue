<template>
  <div id="company">
    <div class="container">
      <h2 class="title">集团覆盖媒体资源</h2>
      <div class="grid">
        <div v-for="n in 8" class="grid-item">
          <img :src="`/img/files/dls${n}.jpg`" alt="img" class="media-logo" />
        </div>
      </div>
      <div class="footer">
        <div class="text">
          <div class="number">19</div>
          <span>家全球顶级媒体发布平台</span>
        </div>
        <div class="text">
          <div class="number">50<span class="add">+</span></div>
          <span>家专注于特定垂直领域的全球/区域媒体</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
#company {
  width: 100%;
  background-color: white;
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
    margin-bottom: 20px;
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
