function divisibleByLeft(n) {
    //Implement
    let result = [];
    let array = [...n + ''].map(Number);
    for(let i = 0; i < array.length; i++) {
        let op = array[i] / array[i -1];
        let res = (op % 1 === 0) ? true : false;
        result.push(res)
    }
    return result;
}

module.exports = divisibleByLeft;