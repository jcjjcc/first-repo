function LinkedList() {
    //内部类
    function Node(data) {
        this.data = data;
        this.next = null; 
    }
    //属性
    this.head = null;
    this.length = 0;
}

//追加
LinkedList.prototype.append = function(data) {
    //判断是否是第一个节点
    if(this.length === 0) {
        this.head = new Node(data); 
    }
}