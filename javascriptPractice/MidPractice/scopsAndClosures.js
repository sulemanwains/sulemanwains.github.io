let array1=[{a: 1, b: 2}, {c: 3, d: 4}]

// let clonedArray=array1;
// console.log(array1, clonedArray);

// clonedArray.push({a:7});
// console.log(array1, clonedArray);


let solution = [];

    for(let x in array1){
        solution.push(array1[x]);
    }

solution[0].a = 5;
console.log(array1, solution);
