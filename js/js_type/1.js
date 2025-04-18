console.log(typeof null)


let largeObject = {
    data: new Array(1000000).fill('a'),
}
//内存释放 垃圾回收
largeObject = null