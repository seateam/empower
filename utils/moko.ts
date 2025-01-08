declare global {
  interface Window {
    Telegram?: any
  }
}

const moko = {
  to(url: string, method: number) {
    // 1:tg  2：others
    if (method === 1) {
      window?.Telegram.WebApp.openTelegramLink(url)
    } else if (method === 2) {
      window?.Telegram.WebApp.openLink(url, true)
    }
  },
  formatAddress(address: string) {
    return address.slice(0, 4) + '...' + address.slice(-4)
  },
  // 错误提示
  error(message: string) {
    ElMessage({
      message: message,
      type: 'error',
      // duration: 0,
      customClass: 'mp-message-error',
      grouping: true,
    })
  },
  // 成功提示
  success(message: string) {
    ElMessage({
      message,
      type: 'success',
      // duration: 0,
      customClass: 'mp-message-success',
      grouping: true,
    })
  },
  // 消息提示
  info(message: string) {
    ElMessage({
      message,
      type: 'info',
      // duration: 0,
      customClass: 'mp-message-info',
      grouping: true,
    })
  },
}

export default moko
