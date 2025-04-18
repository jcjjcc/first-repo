import { configureStore } from "@reduxjs/toolkit";
import goodSlice from "./good";
import userSlice from "./user";

//Store就是把action与reducer联系到一起的对象
const store = configureStore({
    reducer:{
        //接收action {type:'good-slice/setName',payload:'小米'}
        good:goodSlice,
        users:userSlice
    }
})

//state
console.log('store',store.getState());

export default store
