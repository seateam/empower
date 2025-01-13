<template>
  <div id="em-index">
    <div class="contact-background">
      <img src="/img/files/contact1.jpg" alt="" />
    </div>
    <div class="contact-box">
      <div class="contact-box-title">
        <h4>{{ $t('contact-us') }}</h4>
        <div class="title-line"></div>
      </div>
      <div class="contact-information">
        <div class="contact-information-left">
          <div class="c-item">{{ $t('footer-address') }}</div>
          <div class="c-item">{{ $t('footer-phone') }}</div>
          <div class="c-item">
            {{ $t('footer-net') }}<a href="www.empowerwin.com">www.empowerwin.com</a>
          </div>
          <div>
            <img src="/img/files/ewm.png" alt="" />
          </div>
        </div>
        <div class="contact-information-right">
          <img src="/img/files/contact2.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t: $t } = useI18n()
</script>

<style>
#em-index {
  .contact-background {
    width: 100%;
    margin-top: 64px;
  }
  .contact-box {
    width: 1200px;
    height: 550px;
    /* background-color: green; */
    margin: 54px auto;

    .contact-box-title {
      width: 190px;
      height: 54px;
      margin: 0 auto;
      text-align: center;

      h4 {
        font-size: 28px;
        margin: 0;
        color: #045ea5;
        font-weight: normal;
        line-height: 1.1;
      }

      .title-line {
        margin-top: 15px;
        height: 5px;
        width: 30px;
        background-color: #045ea5;
        margin: 0 auto;
        margin-top: 15px;
      }
    }

    .contact-information {
      height: 425px;
      width: 1200px;
      margin: 45px auto;

      .contact-information-left {
        width: 524px;
        height: 425px;
        background-color: #e4e4e4;
        float: left;
        border-radius: 10px 0 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px !important;

        .c-item {
          margin-bottom: 15px;
          line-height: 24px;
        }

        img {
          width: 140px;
          height: 140px;
        }
      }
      .contact-information-right {
        float: right;
        img {
          width: 676px;
          height: 425px;
          border-radius: 0 10px 10px 0;
        }
      }
    }
  }
}
</style>
