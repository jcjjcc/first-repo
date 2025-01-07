class AutoExpandArrayQueue {
    #nums;// 数组 私有属性 es6 语法
    #font = 0;// 对头  为什么要设计对头? 内存优化
    #queSize = 0;// 队列长度
    constructor(capacity) {
        this.#nums = new Array(capacity);
    }

    //获得队列容量
    get capacity(){
        return this.#nums.length;
    }

    //获得队列长度
    get size(){
        return this.#queSize;
    }

    //判断队列是否为空
    isEmpty(){
        return this.#queSize === 0;
    }

    //入队
    push(num){
        if(this.size === this.capacity) {
            this.#expandCapacity();
        }
        //得到队尾
        const rear = (this.#font + this.size) % this.capacity;
        this.#nums[rear] = num;
        this.#queSize++;
    }

    //出队
    pop() {
        const num = this.peek();
        this.#font = (this.#font + 1) % this.capacity;
        this.#queSize--;
        return num;
    }

    //取队头
    peek(){
        if(this.isEmpty()) throw new Error('Queue is empty');
        return this.#nums[this.#font];
    }

    //扩容
    #expandCapacity(){
        //不能干掉别人的
        //重新分配内存 搬运工作
        const newCapacity = this.capacity * 2;
        const newNums = new Array(newCapacity);
        for(let i = 0; i < this.size; i++){
            /**
             newNums[i] = this.#nums[i];
             */
            
            newNums[i] = this.#nums[(this.#font + i) % this.capacity]
        }
        this.#nums = newNums;
        this.#font = 0; // 重置队头指针
    }

}


const queue = new AutoExpandArrayQueue(5);
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.size); // 4
console.log(queue.capacity); //5
console.log(queue.pop())//1
console.log(queue.pop())//2
console.log(queue.pop())//3
queue.push(5);
queue.push(6);
queue.push(7);
queue.push(8);
console.log(queue.size); // 5
console.log(queue.peek()); //4
queue.push(9)
console.log(queue.size); // 6
console.log(queue.capacity); //10
console.log(queue.peek()) //4





