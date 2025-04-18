import {createStore} from 'vuex'
//单一状态树
const state = {
    count:0
}

const getters = {
    count:state=>state.count
}

const actions = {
    increment({commit}){
        commit('increment')
    }
}
//改变
//
const mutations = {
    increment(state){
        // mutation 才可以修改状态
        state.count++
    }
}


export default createStore({
    state,
    getters,
    actions,
    mutations
})
