const removeFromArray = function (arr, ...args) {
	/* My Solution:
    for (let item = 0; item < arr.length; item++) {
        for (let index = 0; index < args.length; index++) {
            if (arr[item] === args[index])
            {
                arr.splice(item, 1);
                index = -1;
            }
                
        }
    }
    return arr;
    */

	// Better Solution:
	const array = arr;
	// create a new empty array
	const newArray = [];
	// use forEach to go through the array
	array.forEach((item) => {
		// push every element into the new array
		// UNLESS it is included in the function arguments
		// so we create a new array with every item, except those that should be removed
		if (!args.includes(item)) {
			newArray.push(item);
		}
	});
	// and return that array
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
