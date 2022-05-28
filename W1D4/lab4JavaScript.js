function max(x, y) {
    // let x= 10;
    // let y=15;
if (x>y) {
    
    return x;

} else if (x<y){

    return y;
}

else{
    return "Both are equal";
}

}

function maxOfThree(x, y, z){
    if (x> y && x>z) {
    
        return x;
    
    } else if (y > x && y>z ){
    
        return y;
    }
    
    else if (z > y && z>x ){
    
        return z;
    }

    else {
        return "They all are equal";
    }
}

function isVowel(x) {
    
    if (x== "a" || x== "e" || x== "i" || x== "o" || x=="u") {
        return "That is a vowel";
    }

    else{
        return "That is a non vowel character";
    }
}


function sum(){   
    let b=0;
let array=[1,2,3,4];

    for (let i = 0; i < array.length; i++) {
        b = b + array[i];
        
    }

    return b;
}

function multiply(){   
    let b=1;
let array=[1,2,3,4];

    for (let i = 0; i < array.length; i++) {
        b = b * array[i];
        
    }

    return b;
}

function reverseString(){
    let str = document.getElementById("mytext5").value;
    let str2="";

    for (let i = str.length -1; i >=0; i--)
    {
        str2= str2 + str.charAt(i);
        
    }
   document.getElementById("mytext55").value=str2;
}

function longeststring(){
    //let arr= document.getElementById("mytext6").value;
    let arr2=["pakistan", 'usa', "morrocosdfm", 'belgium', "germany", 'japan', "china"];
    let maxarray=arr2[0];
    for (let i = 1; i < arr2.length; i++) {

        if (maxarray.length < arr2[i].length) {

            maxarray= arr2[i];
            
        }   
    }
   document.getElementById("mytext66").value=maxarray;
}

function filterLongWords(){

    let i= document.getElementById("mytext7").value;
    let arr2=["pakistan", 'usa', "morrocosdfm", 'belgium', "germany", 'japan', "china"];

    let arr= arr2.filter((s)=>s.length > i);

document.getElementById("mytext77").value=arr;

}



function printer(){
    document.getElementById("mytext").value=max(parseInt(document.getElementById("first").value), parseInt(document.getElementById("second").value));
}

function maxprinter(){
    document.getElementById("mytext1").value=maxOfThree(parseInt(document.getElementById("first1").value), parseInt(document.getElementById("second1").value), parseInt(document.getElementById("third1").value));
}

function vowel(){
    document.getElementById("mytext2").value=isVowel(document.getElementById("first2").value);
}

function summ(){
    document.getElementById("mytext3").value= sum();
}

function multiplyby(){
    document.getElementById("mytext4").value= multiply();
}

window.onload=function(){
    //document.getElementById("myText").className="purpleBox";
    document.getElementById("myButton").onclick=printer;
    document.getElementById("myButton1").onclick=maxprinter;
    document.getElementById("myButton2").onclick=vowel;
    document.getElementById("myButton3").onclick=summ;
    document.getElementById("myButton4").onclick=multiplyby;
    document.getElementById("myButton5").onclick=reverseString;
    document.getElementById("myButton6").onclick=longeststring;
    document.getElementById("myButton7").onclick=filterLongWords;

}
