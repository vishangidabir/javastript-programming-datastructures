let arr = [0, 1, 3, 3, 2, 5];
function sumOfThreeIntegers(arr) {
    let condtion = false;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    console.log(arr[i] + " " + arr[j] + " " + arr[k]);
                    condtion = true;
                }
            }
        }

    }
    if (!condtion) {
        console.log("No Exists");
    }
}
sumOfThreeIntegers(arr);
