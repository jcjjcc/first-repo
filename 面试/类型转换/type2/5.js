
// let specialObj = {
//     valueOf:function(){
//         return 1 
//     },
//     toString:function(){
//         return 'hello'
//     }
// }

// // console.log(specialObj.valueOf() )

// // console.log(Number(specialObj))
// // console.log(String(specialObj))


// let objectWithoutPrimitiveValueOf = {
//     // valueOf: function() {
//     //   console.log("Calling valueof ...")
//     //   return {}
//     // },
//     toString: function() {
//       console.log("Calling toString。。。。")
//       return {}
//     }
//   }
//   // toPrimitive
//   console.log(Number(objectWithoutPrimitiveValueOf))

// //   console.log(Number([1]))
// //   console.log(Number([1,2]))


// //   console.log(Number({}))



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

Number(obj)
// Calling valueOf...
// Calling toString...
// TypeError: Cannot convert object to primitive value