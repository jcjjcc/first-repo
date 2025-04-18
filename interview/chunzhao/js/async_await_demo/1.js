function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

function co(gen) {
    const generator = gen();
    return new Promise((resolve, reject) => {
        function step(nextResult) { 
            if(nextResult.done) { 
                return resolve(nextResult); 
                               
            }
            Promise.resolve(nextResult.value)
               .then(value => {
                console.log(value)
                return step(generator.next()) // 递归调用
                 
               })
        }
        step(generator.next()); // 开始执行
    })
}

co(
    numberGenerator
).then(
    data => console.log(data) // 1 2 3
)