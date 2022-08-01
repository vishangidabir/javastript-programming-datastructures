let i = 0;
let min = 100;
let max = 999;
let storeArray = new Array;
while (i < 10) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    i++;
    storeArray.push(x);
}
console.log("Array element : "+"["+storeArray+"]");

function secondLargest(array) {
    let first = array[0], second = array[1];
   for (let i = 0; i < array.length; i++) {
       if (array[i] > first) {
           first = array[i];
       }
       if (array[i] < first && array[i] > second) {
           second = array[i];
       }
   }
   console.log("Second Largest Number is : " + second);

}
function secondSmallest(array) {
   let secondSmallest = array[1];
   let smallest = array[0];
   for (let i = 0; i < array.length-1; i++) {
       if (array[i] < smallest) {
           smallest = array[i];
       }

       if (array[i] > smallest && array[i] < secondSmallest) {
           secondSmallest = array[i];
       }
   }

   console.log("Second Smallest is :" + secondSmallest);
}
secondLargest(storeArray);
secondSmallest(storeArray)
