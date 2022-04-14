const sumAll = function (firstInt, secondInt) {
	if (
		typeof firstInt != "number" ||
		typeof secondInt != "number" || // Non-number parameter
		firstInt < 0 ||
		secondInt < 0 // Negative number
	) {
		return "ERROR";
	}

	sum = 0;
	min = Math.min(firstInt, secondInt);
	max = Math.max(firstInt, secondInt);
	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
