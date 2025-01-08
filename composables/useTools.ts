export const useWallet = () => {
  const formatIncrease = (increase: string) => {
    const number = Number(increase)

    // 创建一个格式化对象，设置为使用百分比符号
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 2,
    })

    // 使用格式化对象将数字转换为字符串，然后在字符串前添加正负号
    return (number === 0 ? '' : number > 0 ? '+' : '-') + formatter.format(Math.abs(number / 100))
  }

  const formatBalance = (number: number, decimals = 6) => {
    // 创建一个格式化对象，设置为使用千位分隔符和两位小数
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: decimals,
    })

    // 使用格式化对象将数字转换为字符串
    return formatter.format(number)
  }

  const formatDollar = (number: number, minDigits = 0) => {
    // 创建一个格式化对象，设置为使用千位分隔符和两位小数
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })

    // 使用格式化对象将数字转换为字符串
    return formatter.format(number)
  }
  const formatPrice = (balance: string | number, price: string | number, minDigits = 0) => {
    if (balance && price) {
      return formatDollar(Number(balance) * Number(price), minDigits)
    } else {
      return formatDollar(0, minDigits)
    }
  }

  return { formatIncrease, formatBalance, formatDollar, formatPrice }
}
