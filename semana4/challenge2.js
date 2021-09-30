function isEqual(objInput1, objInput2) {
    //Implementación
    const obj1 = Object.keys(objInput1);
    const obj2 = Object.keys(objInput2);

    if(obj1.length !== obj2.length) {
        return false;
    }
    for(let i of obj1) {
        if(objInput1[i] !== objInput2[i]) {
            return false;
        }
    }
    return true;
}

module.exports = isEqual;