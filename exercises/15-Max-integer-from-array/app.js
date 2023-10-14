let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here

function findMax(arr) {
    // Initialize array
    let max = arr[0];

    // Looping through the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger number is found
        }
    }
    return max;
}

let maxNumber = findMax(myArray);
console.log(maxNumber);