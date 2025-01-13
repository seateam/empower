<template>
  <div id="about-us">
    <div class="about-us-box animate-in">
      <img src="/img/files/aboutus.jpg" alt="" />
      <div class="about-us-text">
        <div class="about-us-title">
          <h3>力盟科技集团</h3>
          <p class="Subtitle">中国专业的跨境数字营销集团</p>
          <p>
            力盟科技集团媒体覆盖了Facebook、Instagram、Messenger、Google、Twitter、TikTok、YouTube、Snapchat、Pinterest等全球主流媒体资源，通过数字媒体聚合广告平台Adorado和智能化建站平台Powershopy，结合大数据和优化算法，为出海广告主提供多元化、全链路跨境数字营销和网店解决方案。
          </p>
          <p>
            标准化数字营销解决方案<br />定制化数字营销解决方案<br />基于SaaS的数字化营销解决方案<br />一站式跨境网店SaaS解决方案
          </p>
        </div>
        <div class="about-us-p"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
#about-us {
  width: 100%;
  background-color: white;
  .about-us-box {
    margin: 0 auto;
    padding: 144px 0;
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
