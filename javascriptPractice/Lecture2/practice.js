// let objarray=[{a:1, b: 1}, {a: 2, b: 2}]
// let result=0;

// for (let index = 0; index < objarray.length; index++) {
//     result += objarray[index].b;
// }

// console.log(result);




// let result= function sumObj(objarray){
//     let result1=0;

// for (let index = 0; index < objarray.length; index++) {
//     result1 += objarray[index].b;
// }

// return result1;

// } 
// console.log(result(objarray));




window.onload=function(){
    // let clickbutton= document.getElementById("btn1").onclick=clicked();
    // let clickbutton1= document.getElementById("btn2").onclick=clicked();
    alert("Alert 1");
   document.getElementById("btn1").onclick=clicked();
   document.getElementById("btn2").onclick=clicked();
  alert("Let's se if it works");
    
};


function clicked(){
    alert("Here bro");
    console.log("here it is" , this);
    setTimeout(function(this){
        this.style.color="yellow";
    }, 2000);
};









//////////// SetTimeOut and SetTimerInterval with Cleartimeout




//////// Map , Filter, Reduce




// let arr=[4, 2, 7];

// let result=arr.reduce(function(prev, element, index, array){
//     //console.log(prev, index, element);
//     return prev*element;

// }, 2);

// console.log(result, arr);




// let arr=[4, 2, 7];

// let result=arr.reduce(((e1, e2 )=> e1*e2), 2);

// console.log(result, arr);





// /// Finding the sum of the salaries

// let arry = [{name:"peter",salary:100},{name:"alice",salary:200},{name:"sara",salary:400}];

// //let result=arry.reduce(function(prev, element, index, array){

//     // find the sum of the salaries
// //});


// let result= arry.reduce((p1, p2) => (p1 +p2.salary), 0);

// console.log(result);






// ////////////// Finding maximum number

// let arr=[4, 2, 9, 11, 4, 57, 8, 22, 71];

// // let result1=arr.reduce(function(prev, element, index, array){
    
// //     // find the max number of the array

// // });

// let result=arr.reduce((max, n)=> {

//     if (n > max){
//        max=n;
//     }

//     return max;
// })

// console.log(result);




/// Finding the greater salary among the salaries

// let arry1 = [{name:"peter",salary:1060},{name:"alice",salary:200},{name:"sara",salary:400}];

// // let result2=arry.reduce(function(prev, element, index, array){

// //     // find the greater salary
// // });

// let result=arry1.reduce((acc, p) => (acc> p.salary? acc: p.salary), 0);
// console.log(result);





// /// Finding the sum of all these

// let arry2 = [[2,3], [4,5,3,6], [8,2,99,54]];

// let result3=arry.reduce(function(prev, element, index, array){

//     // find the sum of all these values
// });

// let result=arry2.reduce((acc, arr) => {

//     acc + arr.reduce((acc2, n) => (acc2+n), 0);

// }, 0);
// console.log(result);



// let arry2 = [[2,3], [4,5,3,6], [8,2,99,54]];
// let result=0;

// arry2.forEach(element => {
    
//     result= result + (element.reduce((acc, n) => (acc+n), 0));

// });

// console.log(result);





//// Practice of ForOf and ForIn Loops

// let array=[23, 235, 248]


// let sum=0;

// let object={a:1, b:3, c:7};

// for (let key in object) {

// sum+= object[key];
//     console.log(key, object[key], sum);
// }




// let object={a:1, b:3, c:7};

// let result=[];

// for (let key in object) {
//     result.push(key);
// }
// let d= 12;
// console.log(result);
// result.push("d");
// console.log(result);