import { create } from "zustand";

type useAppleStoreType = {
    price:number,
    inventory:number,
    increment:()=>void, 
    decrement:()=>void,
    getTotal:()=>number,
    doubleCount:()=> Promise<undefined>
}

const useAppleStore = create<useAppleStoreType>()((set,get)=>({
    price:10,
    inventory:10,
    increment(){
        set(state => {
            console.log('里面的',state);
            return {
                ...state,
                inventory:state.inventory+1 
            }
        })
    },
    decrement(){
        set(state => ({
            ...state,
            inventory:state.inventory-1
        }))
    },
    getTotal(){
        return get().inventory*get().price
    },
    async doubleCount(){
        await new Promise(resolve=>setTimeout(resolve,1000))
        set(state => ({
            ...state,
            inventory:state.inventory*2
        }))
    }
}))//返回一个对象，用()包裹，否则会被认为是代码块

const state = useAppleStore.getState()
console.log('外面的',state);

export default useAppleStore;