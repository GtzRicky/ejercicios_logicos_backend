function landMass(country, area) {
    //Implementación
    let res = {
        message: "",
        percent: 0
    };
    let totalMass = 148940000;
    let countryMass = Number(((area * 100) / totalMass).toFixed(2));
    let result = {...res, percent: countryMass, message: country}

    return result;
}

module.exports = landMass;