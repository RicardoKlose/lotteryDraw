/**
 * 抽取随机数
 * @param {number} maxNumber 最大数值
 * @param {number} sum 获取数量
 * @returns {array} 抽取结果
 */
function drawNumber(maxNumber, sum) {
  let count = sum;
  const numberArr = new Array(maxNumber).fill(0).map((v, index) => index + 1);
  const trueNumberArr = [];
  while (count > 0) {
    const rn = Math.floor(Math.random() * numberArr.length);
    trueNumberArr.push(numberArr.splice(rn, 1)[0]);
    count -= 1;
  }
  return trueNumberArr.sort((a, b) => a - b);
}

export default drawNumber;
export { drawNumber };
