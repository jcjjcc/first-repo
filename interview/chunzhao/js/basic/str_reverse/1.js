function reverseStr(str) {
    if(typeof str != 'string'){
        return;
    }

    //split('')将字符串转换为字符数组；
    console.log(str.split(''));
    //reverse()将数组中的元素颠倒顺序；
    console.log(str.split('').reverse());
    //join('')将数组转换为字符串
    console.log(str.split('').reverse().join(''));
    return str.split('').reverse().join('');
}
//不要自己埋头苦写，要边讲边写

// reverseStr('hello');
reverseStr(' h e l lo');


// function reverseStr1(str) {
//     if (typeof str != 'string') {
//         return; 
//     }
//     let arr = [...str];
//     console.log(arr);
// }
// reverseStr1(' h e llo ');