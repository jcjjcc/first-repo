function hongbao(total,num){
    const arr = []
    let restAmount = total //剩余金额初始化为总金额
    let restNum = num
    for(let i = 0; i < num - 1; i++){
        let amout = parseFloat(
            Math.random()*(restAmount/restNum*2 - 0) //随机金额
        ).toFixed(2)//随机金额
        restAmount -= amout //剩余金额
        restNum-- //剩余人数
        arr.push(amout)
    }
    arr.push(restAmount.toFixed(2))
    return arr
}
console.log(hongbao(25,6))