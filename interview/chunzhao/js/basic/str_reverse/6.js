function reverseStr(str) {
    return [...str].map(char => char).reverse().join('');
}
console.log(reverseStr('hello'));