class Subject {
    constructor(){
        this.observers = []
    }
    add(observer){
       this.observers.push(observer) 
    }
    remove(observer){
        this.observers = this.observers.filter(obs => obs !== observer) 
    }
    notify(){
        this.observers.forEach(observer => observer.update())
    }
}

class Observer {
    constructor(name){
        this.name = name
    }
    update(){
        console.log(``)
    } 
}