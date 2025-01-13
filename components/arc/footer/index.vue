<template>
  <div id="em-footer">
    <div class="foot">
      <div class="ftLeft">
        <p>地址：北京市朝阳区慈云寺桥住邦2000商务总部1号楼B座</p>
        <p>电话：0086-400-176-0388</p>
        <p>
          <a href="http://beian.miit.gov.cn/">粤ICP备19032438号</a> Copyright ©2013-2023 Powerwin
          All rights reserved.
        </p>
      </div>
      <div class="ftRight">
        <img src="/img/files/ewm.png" />
        <span>力盟科技集团</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
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
