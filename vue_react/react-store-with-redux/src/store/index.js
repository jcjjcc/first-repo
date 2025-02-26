//count 融入
//实例化一个仓库
//统一代码仓库 只有一个仓库 树状结构
// 每个切片都相当于一个分仓
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./count";

const rootReducer = {
    counter: counterSlice,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;