import useAppleStore from "./store/appleStore";

const Child = ()=>{
  const price = useAppleStore(state => state.price)
  const inventory = useAppleStore(state => state.inventory)
  const increment = useAppleStore(state => state.increment)
  const decrement = useAppleStore(state => state.decrement)
  const getTotal = useAppleStore(state => state.getTotal)
  const doubleCount = useAppleStore(state => state.doubleCount)
  return (
    <div>
      <p>Im Child</p>
      <h1>单价：{price}</h1>
      <h1>库存：{inventory}</h1>
      <button onClick={increment}>加</button>
      <button onClick={decrement}>减</button>
      <button onClick={doubleCount}>加倍</button>
      <h1>总价：{getTotal()}</h1>
    </div>
  )
}

function App(){
  return (
    <>
      <Child/>
    </>
  )
}

export default App;