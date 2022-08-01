function primeFactor(number){
const result = [];
for (let i = 2; i < number; i++) {
    while (number % i == 0) {
        // console.log(i+"");
        result.push(i);
        number = number / i;
    }
}
return result;
}
console.log(primeFactor(100));
