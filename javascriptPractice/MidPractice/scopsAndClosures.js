let array1=[{a: 1, b: 2}, {c: 3, d: 4}]

// let clonedArray=array1;
// console.log(array1, clonedArray);

// clonedArray.push({a:7});
// console.log(array1, clonedArray);


let solution = [];

    for(let x in array1){
        solution.push({...array1[x]});
    }

solution[0].a = 5;
console.log("Shallow Copy ", array1, solution);


let solution1 = [];

    for(let x in array1){
        solution1.push(array1[x]);
    }

solution1[0].a = 5;
console.log("Deep Copy ", array1, solution1);




// //deep copy using loop

// let a = [20, 30, 40];

// let b = [{ a: 1, b: 2 }, { c: 3, d: 4 }];



// let copiedarr = [];

// for (let elem in b) {

//     console.log(elem, b[elem]);

//     copiedarr.push({ ...b[elem] });  //deep copy

// }



// console.log("\nCopied arr: ", copiedarr);

// copiedarr[0].b = 90;

// console.log("\nAfter change Copied arr: ", copiedarr, "\n Original b: ", b);