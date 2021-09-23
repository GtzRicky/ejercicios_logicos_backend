function countPrimes(number) {
    //Implementación
	let totalNumbers = new Array(number);
	for (let i = 0; i < number; i++) {
		totalNumbers[i] = false;
	}
	let result = 0;
	for (let i = 2; i < number; i++) {
		if (totalNumbers[i] === false) {
			result++;
			for (let j = 2; i * j < number; j++) {
				totalNumbers[i * j] = true;
			}
		}
	}
	return result;
}

module.exports = countPrimes;