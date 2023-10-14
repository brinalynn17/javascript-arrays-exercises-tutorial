let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

let initialValue = Math.floor(mySampleArray.length / 2);
let increasingValue = 0;
let stopValue = mySampleArray.length;

for (let index = initialValue; index < stopValue; index++) {
    console.log(mySampleArray[index]);
};
