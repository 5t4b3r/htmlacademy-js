function getRandomPositiveInteger(a, b = 1) {
  if (a === undefined) {
    throw new Error('Первый параметр должен быть число');
  }

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger(10, 20);


const checkStringLength = (str, lengthCount) => str.length <= lengthCount;
checkStringLength();
