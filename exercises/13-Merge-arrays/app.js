let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    for (let i = 0; i < firstArray.length; i++) {
        newArray.push(firstArray[i]);
    }

    // Loop through the second array and add its items to the new array
    for (let i = 0; i < secondArray.length; i++) {
        newArray.push(secondArray[i]);
    }
    
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));
