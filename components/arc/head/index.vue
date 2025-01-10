<template>
  <div id="em-head">
    <div class="em-head-box">
      <a href="">
        <img src="/demo_files/clogo.png" alt="" />
      </a>

      <ul>
        <li><a href="">首页</a></li>
        <li><a href="">关于我们</a></li>
        <li><a href="">公司业务</a></li>
        <li><a href="">投资者关系</a></li>
        <li><a href="">联系我们</a></li>
      </ul>

      <div class="right">
        <div class="language-switch">
          <a href="">EN</a>
          <a href="">繁</a>
          <a href="">简</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
#em-head {
  width: 100%;
   background-color: rgb(0, 0, 0);
   width: 100%;
   height: 64px;
   position: fixed;
    top: 0;
  .em-head-box {
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin: 0 auto;
    max-width: 1200px;
    a {
      display: flex;
      float: left;
      align-items: center;
      text-align: center;
    }

    ul {
      display: flex;
      align-items: center; /* 垂直居中 */
      justify-content: space-between;
      margin: 0;
      padding: 0;
      list-style: none;
      width: 642px;

      li {
        padding: 0 10px;
        a {
          color: white;
        }
      }
    }
    .right {
      a {
        border-right: 1px solid #cacaca;
        padding: 0 10px;
        font-size: 14px;
        color: white;
      }
    }
  }
}

</style>
