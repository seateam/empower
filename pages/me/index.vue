<template>
  <div id="archloot-me" class="page">
    <img class="me-bg" src="/img/moko/me-bg.png" alt="background" />
    <!-- <p style="word-break: break-all">{{ JSON.stringify(userStore.user) }}</p> -->
    <div class="avatar-box">
      <img class="avatar" :src="userStore.userTgInfo.photo_url" alt="avatar" />
      <div class="name">
        <span>Hello!</span>
        <br />
        {{ userStore.userTgInfo.first_name + userStore.userTgInfo.last_name }}
      </div>
    </div>
    <div class="rewards-box">
      <div class="rewards-container">
        <div class="title">Total Moko Point</div>
        <div class="moko-point">
          <span class="number">{{ userStore.mokoPoint }}</span>
          <img src="/img/moko/logo.svg" alt="point" />
        </div>
        <div class="dash"></div>
        <div class="title">Total Rewards</div>
        <div class="points">
          <div class="item">
            <span>{{ userStore.mokoPoint }}</span>
            <img src="/img/moko/USDT.svg" alt="point" />
            <span class="point">USDT</span>
          </div>
          <div class="item">
            <span class="number">1235</span>
            <img src="/img/moko/sei.svg" alt="point" />
            <span class="point">SEI</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-box">
      <div
        class="tab-item"
        :class="{ active: currentTab === 'Point Record' }"
        @click="switchTab('Point Record')"
      >
        Point Record
        <div class="underline" v-if="currentTab === 'Point Record'"></div>
      </div>
      <div
        class="tab-item"
        :class="{ active: currentTab === 'Asset Record' }"
        @click="switchTab('Asset Record')"
      >
        Asset Record
        <div class="underline" v-if="currentTab === 'Asset Record'"></div>
      </div>
    </div>

    <div class="tab-content">
      <div v-if="currentTab === 'Point Record'">
        <div class="task-card" v-for="e in userStore.pointsList">
          <div class="task-content">
            <div class="left">{{ e.taskName }}</div>
            <div class="right">
              <div>+ {{ e.point }}</div>
              <img src="/img/moko/logo.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="active-box" v-if="currentTab === 'Asset Record'">
        <div class="task-card">
          <div class="task-content">
            <div class="left">Get USDT</div>
            <div class="right">
              <div>+ 1.99</div>
              <img src="/img/moko/USDT.svg" />
            </div>
          </div>
        </div>
        <div class="task-card">
          <div class="task-content">
            <div class="left">Get SEI</div>
            <div class="right">
              <div>+ 1.99</div>
              <img src="/img/moko/sei.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="no-records">
      <div class="task-content">No records</div>
    </div> -->
  </div>
</template>
<script lang="ts" setup>
const currentTab = ref('Point Record')
const userStore = useUserStore()
const switchTab = (tabName: string) => {
  currentTab.value = tabName
}
</script>
<style lang="scss" scoped>
#archloot-me.page {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
  // background: url('/img/moko/me-bg.png');
  .me-bg {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
    // left: calc(50% - 145px);
  }
  .avatar-box {
    width: 100%;
    padding: 12px;
    margin-top: 60px;
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    // justify-content: center;
    gap: 8px;
    // border-radius: 100%;
    // border: 1px dashed rgba(104, 254, 96, 0.4);
    img {
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }
    .name {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      span {
        color: #c1c1c1;
        font-family: Poppins;
        font-size: 12px;
      }
    }
  }
  .title {
    z-index: 1;
    font-size: 11px;
  }
  .moko-point {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 500;
  }
  .points,
  .moko-point,
  .title {
    padding: 0 10px;
  }
  .points {
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 28px;
    font-size: 14px;

    img {
      width: 14px;
      height: 14px;
      margin: 0 3px 0 9px;
    }
    .item {
      display: flex;
      align-items: center;
    }
  }

  .rewards-box {
    z-index: 1;
    position: relative;
    border-radius: 9px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 1px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 30.67%, #00ff92 187.8%);
      z-index: 0;
    }
    .rewards-container {
      position: relative;
      padding: 8px 10px;
      background: linear-gradient(179deg, rgba(80, 236, 164, 0) 66.67%, #00ff92 187.8%),
        linear-gradient(180deg, rgba(80, 236, 164, 0) 71.88%, rgba(0, 212, 255, 0.44) 100%), #202328;
      border-radius: 9px;
      .dash {
        margin: 5px 0;
        width: 100%;
        height: 1px;
        border-top: 1px dashed #ababab;
        z-index: 1;
      }
    }
  }
  .no-records {
    padding: 40px 0;
  }

  .tab-box {
    font-family: 'SF Pro';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #444;
    margin: 28px 0;

    .tab-item {
      position: relative;
      flex: 1;
      text-align: center;
      padding: 10px 0;
      font-size: 16px;
      font-weight: 500;
      color: #aaa;
      cursor: pointer;
      &.active {
        color: #fff;
      }
      .underline {
        position: absolute;
        bottom: 0;
        left: 20%;
        width: 60%;
        height: 4px;
        background: linear-gradient(90deg, #44e7c1, #3cffa3 45%, #a6f9af 78%, #fff 100%);
        border-radius: 1px;
      }
    }
  }

  .tab-content {
    width: 100%;
    z-index: 1;

    .task-card {
      z-index: 1;
      position: relative;
      border-radius: 3px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 1px;
      margin-bottom: 10px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 30.67%, #44e7c1 187.8%);
        z-index: 0;
      }
      .task-content {
        position: relative;
        padding: 8px 10px;
        background: #202328;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 14px;
        .left {
          display: flex;
          align-items: center;
          gap: 8px;
          .avatar {
            width: 28px;
            height: 27.234px;
            flex-shrink: 0;
            border-radius: 100%;
            object-fit: cover;
            border: 1.3px solid #5dfd7a;
          }
        }
        .right {
          font-family: 'SF Pro';
          font-size: 16px;
          font-weight: 700;
          padding-right: 24px;
          display: flex;
          align-items: center;
          gap: 4px;
          img {
            width: 24.767px;
            height: 24.767px;
            flex-shrink: 0;
          }
        }
      }
    }
  }
}
</style>
