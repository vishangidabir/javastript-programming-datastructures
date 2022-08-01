let i = 0;
let min = 100;
let max = 999;
let storeArray = new Array;
while (i < 10) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    i++;
    storeArray.push(x);
}
console.log(storeArray);

