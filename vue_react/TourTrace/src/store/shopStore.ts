import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题

export const useShopStore = defineStore('shop', () => {
    //topBarState 响应式状态 topBarState topBarState.value
    const topBarState = ref([
        {
            title: "酒店",
            icon: "hotel-o",
        },
        {
            title: "跟团游",
            icon: "flag-o",
        },
        {
            title: "当地游",
            icon: "location-o",
        },
        {
            title: "门票",
            icon: "coupon-o",
        },
        {
            title: "自由行",
            icon: "guide-o",
        }
    ])

    
    return {
        topBarState
    }
})