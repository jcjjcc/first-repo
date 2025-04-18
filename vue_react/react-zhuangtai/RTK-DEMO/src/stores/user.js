import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user-slice',
    initialState:{
        name:'abc',
        gender:'男',
        age:18
    },
    reducers:{
        //
        setName(state,action){// state 修改前的状态
            // 这里的action是一个对象，action.type  action.payload
            // action.payload 是调用setName时传递的参数
            
            state.name = action.payload
        },
        setGender(state,action){
            state.gender = action.payload
        },
        setAge(state,action){
            // console.log('action:',action.payload);
            state.age = action.payload 
        }
    }

})

// 我们可以导出 slice 中生成的 Redux action creators 和 reducer 函数。
export const {setName,setGender,setAge} = userSlice.actions
console.log('setName:',setName);
/**这setName函数就是一个action creator，返回一个action对象
 * const setName = text => {
  return {
    type: 'user-slice/setName',
    payload: text
  }
  }
 *所有说这个setName不是reducers里的setName （这是一个reducer函数，可以接收action），而是一个action creator
 *createSlice会根据reducers里的各个reducer自动生成action creator，联系就是 type的值
 */

export default userSlice.reducer
console.log('userSlice.reducer',userSlice.reducer);