function selectSort(arr) {
    if (arr.length < 2) return;
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; 
    }


}

// 测试代码
let arr = [34, 7, 23, 32, 5, 62];
selectSort(arr);
console.log(arr);