let a ={
    name: 'Julia',
    age: 20
}
    function change(o){
    o.age=24
    o ={
        name: 'Kath',
        age: 30
    }
    return o;
}
    let b = change(a);
    console.log(b.age)
    console.log(a.age);
    console.log(b)
    console.log(a)
    
   