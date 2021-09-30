function keysAndValues(objInput) {
    //Implementación
    const keys = Object.keys(objInput);
    const entry = Object.entries(objInput);

    const sortKeys = keys.sort((a, b) => a -b);
    const valuesArray = entry.map(item => item[1]);

    return [valuesArray]
}

module.exports = keysAndValues;