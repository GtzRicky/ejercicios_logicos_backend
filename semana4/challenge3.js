function isSpecialArray (specialArr) {
  for(let i = 0; i < specialArr.length; i++) {
    if(specialArr[i] % 2 === i % 2) {
      continue;
    };
    return false;
  };
  return true;
};

module.exports = isSpecialArray;
