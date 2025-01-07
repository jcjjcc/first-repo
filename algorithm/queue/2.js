// es6 + 数组
class ArrayQueue {
    #nums;// 数组 私有属性 es6 语法
    #font = 0;// 队头  为什么要设计对头? 内存优化
    #queSize = 0;// 队列长度
    constructor(capacity) {
        // 分配了capacity单位个连续的内存空间
        //这段内存就在缓存当中
        this.#nums = new Array(capacity);        
    }
    // ADT 抽象数据类型  为什么es6提供get set方法?
    get size() {
        return this.#queSize;
    }

    push(num) {
        if (this.size === this.capacity){
            console.log('队列已满');
            return;
        }
        
        const rear = (this.#font + this.size) % this.capacity;
        this.#nums[rear] = num;
        this.#queSize++;
    }

    pop() {
        const num = this.peek();
        this.#font = (this.#font + 1) % this.capacity;
        this.#queSize--;
        return num;
    }
    // 取对头
    peek() {
        if (this.isEmpty()) throw new Error('队列为空');
        return this.#nums[this.#font];
    }
    
    isEmpty() {
        return this.#queSize === 0;
    }

    toArray() {
        const arr = new Array(this.size);
        for (let i = 0, j = this.#font; i < this.size; i++, j ++){
            arr[i] = this.#nums[j % this.capacity];
        }
        return arr
    }
}


