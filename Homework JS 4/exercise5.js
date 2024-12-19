let arr = [3, 5, 6, 8, 11, "black", "shadow", "banzaiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"];

function sumOfMaxAndMin(arr) {
    let minValue;
    let maxValue;
    let firstNumFound = false;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && typeof arr[i] === 'number') {
            if (!firstNumFound) {
                minValue = arr[i];
                maxValue = arr[i];
                firstNumFound = true;
            }
            else {
                if (arr[i] < minValue) {
                    minValue = arr[i];
                }
                if (arr[i] > maxValue) {
                    maxValue = arr[i];
                }
            }
        }
    }
    if (!firstNumFound) { return "No numeric values found in the array"};

    return minValue + maxValue;
}
console.log(sumOfMaxAndMin(arr));