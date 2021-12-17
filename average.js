function average(numbers) {
  let count = 1;
  numbers = numbers.filter((ele) => !isNaN(ele));
  if(!numbers.length){
    return NaN;
  }
  const sumTotal = numbers.reduce((p, c) => {
    count++;
    return Number(p) + Number(c);
  });
  return sumTotal/count;
}

module.exports = {average};
