let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function getPhoneNum(arr) {
    // return "("+arr[0]+arr[1]+arr[2]+") "+arr[3]+arr[4]+arr[5]+"-"+arr[6]+arr[7]+arr[8]+arr[9]
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}
console.log(getPhoneNum(arr)) // output: (123) 456-7890