function minMax(aNumbs) {
    //Implementación
    let res = {
        min: null,
        max: null
    };
    const array = aNumbs.sort((a,b) => a - b);
    const minNum = array.shift();
    const maxNum = array.pop();

    const result = {...res, min: minNum, max: maxNum};
    return result;
}

module.exports = minMax;