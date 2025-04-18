//2.0.10.10
//2.0.10

function compareVersion(version1,version2){
    let v1 = version1.split('.').map(Number);
    let v2 = version2.split('.').map(Number);
    let len = Math.max(v1.length,v2.length);
    // for(let i = 0;i < len;i++){
    //     if(v1[i] > v2[i]){
    //         return 1;
    //     }else if(v1[i] < v2[i]){
    //         return -1;
    //     }
    // }
    //如果v1[i]不存在，默认为0
    //如果v2[i]不存在，默认为0，这样就可以避免v1[i]和v2[i]为undefined的情况
    //undefined和任何数字进行比较，都会被转换为NaN，NaN和任何数字进行比较，都会返回false
    for(let i = 0;i < len;i++){
       const vv1 = v1[i]||0;
       const vv2 = v2[i]||0;
       if (vv1>vv2) return 1;
       if(vv1<vv2) return -1; 
    }

    return 0;

}
console.log(compareVersion("2.0.10.10","2.0.10"))


// console.log("2.0.10".split('.').map(Number))//[2,0,10]
// const a = [1,2,3]
// console.log(a[3]) //undefined 越界不会报错
// console.log(a[3]||0) // 短路