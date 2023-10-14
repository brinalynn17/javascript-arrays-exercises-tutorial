let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];


let initialValue = mySampleArray.length / 2; // Start from the middle of the array

let stopValue = mySampleArray.length -1; // Loop until the end of the array

let increasingValue = 1; // Iterate forward through the array

for (let i = initialValue; i < stopValue; i += increasingValue) {
	console.log(mySampleArray[i]);
}


