function quickSort(arr, l, r) {
    if (l >= r) return;
    let i = l - 1, j = r + 1;
    let x = arr[Math.floor((l + r) / 2)];
    
    while (i < j) {
        do i++; while (arr[i] < x);
        do j--; while (arr[j] > x);
        if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    quickSort(arr, l, j);
    quickSort(arr, j + 1, r);
}

// 测试代码
let arr = [34, 7, 23, 32, 5, 62];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

