let objArray = [{ name: "salman", age: 27 }, { name: "salman", age: 24 }, { name: "salman", age: 30 }];

function sortArray(x, y){
    return ((x.age < y.age) ? -1: ((x.age > y.age) ? 1 : 0));

}


// function mySort(x, y) {

//     return ((x.age < y.age) ? -1 : ((x.age > y.age) ? 1 : 0));

// }


let sortArr = objArray.sort(mySort);

console.log(sortArr)