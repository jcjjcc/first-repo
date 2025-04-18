import { createSlice } from '@reduxjs/toolkit'

const goodSlice = createSlice({
  name: 'good-slice',
  initialState: {
    name:'苹果',
    price: 100,
    
  },
  reducers: {
    setName(state,action){
    
      state.name = action.payload
    },
    setPrice(state){
      state.price +=1
    } 
  }

})
// console.log('goodSlice:',goodSlice);
// console.log('goodSlice.reducer:',goodSlice.reducer);
// console.log('goodSlice.actions:',goodSlice.actions);


export const incrementAsync = () => (dispatch) =>{
  setTimeout(() => {
    dispatch(setPrice()) 
  },1000)
}
export default goodSlice.reducer
export const selectGood = (state) => state.good

export const {setName,setPrice} = goodSlice.actions