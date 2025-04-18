// let objWithStringValue = {
//     toString: function() {
//       return "hello"
//     }
//   }
  
//   console.log(String(objWithStringValue))
  
//   let objWithValueOf = {
//     // toString: function() {
        
//     //   return {}
//     // },
//     valueOf: function() {
//       console.log("Calling valueOf...")
//       return 2
//     }
//   }
  
//   console.log(String(objWithValueOf))

var obj = {
  valueOf: function () {
    console.log('Calling valueOf...');
    return {};
  },
  toString: function () {
    console.log('Calling toString...');
    return {};
  }
};

String(obj)
// Calling toString...
// Calling valueOf...
// TypeError: Cannot convert object to primitive value