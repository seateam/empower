<template>
  <div id="mokoko-earn" class="page">
    <div v-if="dailyTasks.length" class="title-box">
      <div class="task-title">
        <span>🕹️ Daily Task</span>
      </div>
    </div>
    <div v-for="task in dailyTasks" :key="task.taskId" class="task-card">
      <div class="task-content">
        <div class="left">{{ task.name }}</div>
        <div class="medium">
          <div>+ {{ task.rewards }}</div>
          <img src="/img/moko/logo.svg" />
          <div v-if="task.operateStatus === 2" class="completed">
            <div class="claimed">
              <img src="/img/moko/claimed.svg" alt="checked" />
            </div>
          </div>
          <el-button
            v-else
            class="btn"
            :loading="loadingMap[task.taskId]"
            @click="handleClick(task)"
          >
            <template v-if="!loadingMap[task.taskId]">
              {{ task.operateStatus === 1 ? 'Claim' : 'Go' }}
            </template>
          </el-button>
        </div>
      </div>
    </div>
    <div v-if="telegramTasks.length" class="title-box">
      <div class="task-title">
        <span>👯 Telegram Tasks</span>
      </div>
    </div>
    <div v-for="task in telegramTasks" :key="task.taskId" class="task-card">
      <div class="task-content">
        <div class="left">{{ task.name }}</div>
        <div class="medium">
          <div>+ {{ task.rewards }}</div>
          <img src="/img/moko/logo.svg" />
          <div v-if="task.operateStatus === 2" class="completed">
            <div class="claimed">
              <img src="/img/moko/claimed.svg" alt="checked" />
            </div>
          </div>
          <el-button
            v-else
            class="btn"
            :loading="loadingMap[task.taskId]"
            @click="handleClick(task)"
          >
            <template v-if="!loadingMap[task.taskId]">
              {{ task.operateStatus === 1 ? 'Claim' : 'Go' }}
            </template>
          </el-button>
          <!-- <el-button class="btn" @click="moko.to(task.visitUrl, 1)">GO</el-button> -->
        </div>
      </div>
    </div>
    <div v-if="twitterTasks.length" class="title-box">
      <div class="task-title">
        <span>🔥 X Tasks</span>
      </div>
    </div>
    <div v-for="task in twitterTasks" :key="task.taskId" class="task-card">
      <div class="task-content">
        <div class="left">{{ task.name }}</div>
        <div class="medium">
          <div>+ {{ task.rewards }}</div>
          <img src="/img/moko/logo.svg" />
          <div v-if="task.operateStatus === 2" class="completed">
            <div class="claimed">
              <img src="/img/moko/claimed.svg" alt="checked" />
            </div>
          </div>
          <el-button
            v-else
            class="btn"
            :loading="loadingMap[task.taskId]"
            @click="handleClick(task)"
          >
            <template v-if="!loadingMap[task.taskId]">
              {{ task.operateStatus === 1 ? 'Claim' : 'Go' }}
            </template>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const userStore = useUserStore()
const router = useRouter()
const loadingMap = reactive<Record<number, boolean>>({})
const dailyTasks = computed(() => userStore.taskList.filter((task) => task.taskType === 1))
const twitterTasks = computed(() => userStore.taskList.filter((task) => task.taskType === 2))
const telegramTasks = computed(() => userStore.taskList.filter((task) => task.taskType === 3))
const handleClick = async (item: any) => {
  switch (item.operateStatus) {
    case 0:
      if (item.taskType === 1) {
        router.push('/')
        return
      }
      if (item.taskType === 2) {
        moko.to(item.visitUrl, 2)
      }
      if (item.taskType === 3) {
        moko.to(item.visitUrl, 1)
      }
      userStore.completeTask('task', item.taskId)
      break
    case 1:
      await userStore.claimTask(item.taskId)
      break
    case 2:
      // moko.to(item.visitUrl, 2)
      break
    default:
      break
  }
  loadingMap[item.taskId] = true
  setTimeout(async () => {
    loadingMap[item.taskId] = false
  }, 3000)
}
</script>
<style lang="scss" scoped>
#mokoko-earn {
  width: 100%;
  font-family: 'Poppins-Bold';
  padding-bottom: 100px;
  background: url('/img/moko/earn-bg.png') center 100% / 100% no-repeat;
  .earn-banner {
    width: 100%;
    height: auto;
  }
  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 14px 0;
    .task-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    img {
      width: 20px;
    }
    .refreshMove {
      animation: refreshMove 0.5s ease;
    }
  }
  .task-card {
    position: relative;
    width: 100%;
    min-height: 61px;
    margin-bottom: 10px;
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(253deg, #202328 68.23%, #202328 108.27%);
    .task-content {
      font-size: 14px;
      position: absolute;
      border-radius: 3px;
      top: 1px;
      bottom: 1px;
      left: 1px;
      right: 1px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 14px;
      .medium {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .right {
        img {
          width: 18px;
          margin-left: 2px;
          transform: translateY(-2px);
        }
      }
    }
  }
  .btn,
  .completed {
    width: 68px;
    height: 28px;
    margin-left: 8px;
  }
  .completed {
    position: relative;
    border-radius: 5px;
    background: linear-gradient(90deg, #44e7c1 9.26%, #3cffa3 52.43%, #a6f9af 84.93%, #fff 105.19%);
    .claimed {
      position: absolute;
      border-radius: 5px;
      top: 1px;
      left: 1px;
      bottom: 1px;
      right: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #202328;
    }
    img {
      width: 20px;
    }
  }
  .task-dialog {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 1));
    z-index: 9;
    display: flex;
    align-items: flex-end;
    .dialog-content {
      padding: 20px;
      border-radius: 20px 20px 0 0;
      background: #272a2d;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: slideInUp 0.3s ease-out;

      .close {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
      .dialog-icon {
        img {
          width: 77px;
        }
      }
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.4);
        font-family: Poppins;
      }
      .points-display {
        display: flex;
        align-items: center;
        gap: 5px;
        font-family: 'Poppins-Bold';
        font-size: 29px;
        img {
          width: 29px;
        }
      }
      .btn {
        width: 100%;
        height: 36px;
      }
    }
  }
}
@keyframes slideInUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideOutDown {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}
@keyframes refreshMove {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
