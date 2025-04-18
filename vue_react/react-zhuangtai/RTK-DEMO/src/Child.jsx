
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAge } from "./stores/user";
import { selectGood } from "./stores/good";
import {setPrice} from "./stores/good"
import { incrementAsync } from "./stores/good";
function Child() {
    const user = useSelector(state => state.users)
    const good = useSelector(selectGood)
    const dispatch = useDispatch()
    function addAge() {
        const action = setAge(user.age+1)
        console.log(action)
        /**
         * payload：19
           type: "user-slice/setAge"
         */

        //分发action给根reducer
        dispatch(action) 
    }
    function addPrice() {
        const action = setPrice()
        console.log(action)
        dispatch(action) 
    }
    function addAsyPrice() {
        const action = incrementAsync()
        console.log(action)
        dispatch(action)
    }
    return (
        <>
            <div>user:{JSON.stringify(user)}</div>
            <div>good:{JSON.stringify(good)}</div>
            <button onClick={ addAge}>年龄+1</button>
            <button onClick={addPrice}>价格+1</button>
            <button onClick={addAsyPrice}>价格异步+1</button>
            <h1>Child Component</h1>
        </>
    )
}

export default Child;