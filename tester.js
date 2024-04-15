var num1 = 4;
var num2 = 7;
var num3 = 8;
var num4 = 11; 
var num5 = 13;

const myArray = [num3, num1, num2, num5, num4];
console.log("Array before the sort: " + myArray.join(" "));
myArray.sort((a, b) => a - b);
console.log("Array after the sort: " + myArray);
//console.log(myArray.join(" "));


function sortingAnArray(...arr){
    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}