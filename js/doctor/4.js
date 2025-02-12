var a = 1

function fu() {
     a = 2
     console.log(a,window.a)
    function a() {}
    console.log(a,window.a)
    console.log(a)
}
fu()
console.log(a,window.a)