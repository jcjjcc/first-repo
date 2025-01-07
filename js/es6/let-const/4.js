{
    var blockScoped = "I'm block scoped"; 
}
function exampleFunction() {
    var functionScoped = "I'm function scoped";
    
    if (true) {
        var innerVariable = "This is also function scoped!";
    }
    
    console.log(blockScoped);  // "I'm block scoped"
    console.log(innerVariable); // "This is also function scoped!"
}


exampleFunction();
console.log(functionScoped); // functionScoped is not defined
console.log(innerVariable); // innerVariable is not defined