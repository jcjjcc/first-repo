// // 定义一个仓库
// import { defineStore } from "pinia";
// import { ref } from "vue";

// // 仓库名  函数
// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     function increment() {
//         count.value++
//     }
//     return {
//         count,
//         increment 
//     }
// })

import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});