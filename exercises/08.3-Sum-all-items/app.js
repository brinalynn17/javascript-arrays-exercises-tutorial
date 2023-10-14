function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for (let i = 0; i < theArray.length; i++) {
        total += theArray[i];
    }

    return total;
}

// Call the function with an array of numbers
let exampleArray = [10, 20, 25];
let result = sumTheElements(exampleArray);
console.log(result); // This should print 55 (10 + 20 + 25)