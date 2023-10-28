export const numberRounding = (num) => {
  const num1 = Number(num)
  if (Number.isInteger(num1)) {
    return num1
  }
  const priceNum = num1.toFixed(2);
  if (priceNum[priceNum.length - 1] === '0') {
    const priceNum1 = Number(priceNum)
    return priceNum1.toFixed(1)
  }
  return priceNum
}