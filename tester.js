var num1 = 4;
var num2 = 7;
var num3 = 8;
var num4 = 11; 
var num5 = 13;
/*
const myArray = [num3, num1, num2, num5, num4];
console.log("Array before the sort: " + myArray.join(" "));
myArray.sort((a, b) => a - b);
console.log("Array after the sort: " + myArray);
//console.log(myArray.join(" "));
*/

function sortingAnArray(...arr){
    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    var array = [];
    for(var i = 0; i < n; i++){
        if(i == 0){
            array.push(0);
        } else if(i == 1){
            array.push(1);
        } else {
            var newNum = array[i - 2] + array[i - 1];
            array.push(newNum);
        }
    }
    
    return array;
        
    //Do NOT change any of the code below 👇
    }


    var myArray = fibonacciGenerator(10);
    console.log(myArray);