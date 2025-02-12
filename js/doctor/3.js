var a = 1;

function fn(a) {
  a()
  var a = 2;
  function a() {
    console.log('hello')
  }
  var b  = a;
  console.log(a)

}
fn(3)