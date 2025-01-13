<template>
  <div id="contact">
    <div class="container">
      <h2 class="title">数字营销解决方案</h2>
      <div class="box">
        <div class="box-container">
          <img src="/img/files/ywicon1.png" alt="" />
          <h4>标准化数字营销</h4>
          <p>为所有客户提供采购媒体资源服务</p>
        </div>
        <div class="box-container">
          <img src="/img/files/ywicon2.png" alt="" />
          <h4>定制化数字营销</h4>
          <p>为客户提供定制化深度服务</p>
        </div>
        <div class="box-container">
          <img src="/img/files/ywicon3.png" alt="" />
          <h4>基于SaaS的数字营销</h4>
          <p>通过Adorado平台为客户提供基于SaaS的数字营销服务</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
#contact {
  width: 100%;
  min-height: 500px;
  background-color: white;

  .container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    text-align: center;
    height: 226px;

    .title {
      width: 100%;
      font-size: 32px;
      margin-top: 140px;
    }
    .box {
      width: 100%;
      height: 291px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .box-container {
        width: 384px;
        height: 227px;
        background: #fff;
        padding: 40px 25px 25px;
        text-align: center;
        box-sizing: border-box;
        float: left;
        box-shadow: 2px 2px 20px rgb(0 0 0 / 6%);
        h4 {
          color: #f97310;
        }
      }
    }
  }
}
</style>
