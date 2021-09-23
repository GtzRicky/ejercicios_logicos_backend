function twoSums(numbs, target) {
    let array = [];

    for(let i = 0; i < numbs.length; i++) {
        for(let j = i + 1; j < numbs.length; j++) {
            if (numbs[i] + numbs[j] === target) {
                array.push(i);
                array.push(j);
            }
        }
    }
    return array;
};

module.exports = twoSums;