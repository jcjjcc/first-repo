const Pubsub = {
    list:{},
    publish(type,data){
        if(!this.list[type]){
            return false;
        }
        this.list[type].forEach(fn => {
            fn(data);
        });
    },
    //订阅类型和自定义订阅事件
    subscribe(type,fn){
        if(!this.list[type]){
            this.list[type] = [fn];
        }
        else{
            this.list[type].push(fn); 
        }
    },
    //取消订阅
    unSubscribe(type,fn){
        if(!this.list[type]){
            return false;
        }
        this.list[type] = this.list[type].filter(f => f !== fn);
    }
}

Pubsub.subscribe('hello',function(data){
    console.log(data+'111'); 
})
Pubsub.subscribe('hello',function(data){
    console.log(data); 
})
Pubsub.publish('hello','hello world');