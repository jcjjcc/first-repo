var isValid = function(s) {
    let stack = []
    for(let i = 0; i<s.length; i++){
        if(s[i] === '('||s[i]==='{'||s[i]==='['){
            stack.push(s[i])
        }else{
            let start = stack[stack.length - 1]
            if(start === '(' && s[i] === ')' ||
               start === '{' && s[i] === '}' ||
               start === '[' && s[i] === ']'
            ){
                stack.pop()
            }else{
                return false
            }
        }
    }
      return stack.length === 0
};

let str = ']]]]]'

console.log(isValid(str))

let a = []
console.log(a[-1])