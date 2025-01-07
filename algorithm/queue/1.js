const queue = [];

//入队 FIFO 线性 访问受限
queue.push(1);
queue.push(3);
queue.push(2);
queue.push(5);
queue.push(4);

//访问对首
const peek = queue[0];

//出队
const pop = queue.shift();

const size = queue.length;

const empty = queue.length === 0;