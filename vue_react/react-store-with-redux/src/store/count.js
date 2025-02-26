//创建Redux 切片管理状态
import {createSlice} from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name:'counter', //切片的名字
    initialState:{value:0},//初始状态
    //可以声明一些函数 纯函数 用来修改状态 action
    reducers:{
        increment:(state)=>{
            state.value += 1;
        },
        //reducer函数 生产新状态的的函数
        decrement:(state)=>{
            state.value -= 1; 
        }
    }
})
//旧状态 -》 新状态 reducer函数 纯函数？ zhi
export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer;