function arrayOfMultiples (num, length) {
  let array = [];
  for(let i = 1; i < length + 1; i++) {
    array.push(i);
  }
  let multiples = array.map(item => item * num);
  return multiples;
}

module.exports = arrayOfMultiples;