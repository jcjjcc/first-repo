
import {onMounted} from 'vue'

function callback(entries, observer) {
    // 遍历每个被观察的元素
    entries.forEach(entry => {
        // 如果元素的交叉比例小于等于 0，说明元素不在视口中，直接返回
        if (entry.intersectionRatio <= 0) {
            return
        } 
        // 获取当前元素
        const img = entry.target
        // console.log(img)
        // 获取元素的 data-src 属性值
        const src = img.getAttribute('data-src')
        // 将 data-src 的值赋给 src 属性
        img.setAttribute('src', src)
        // 停止观察当前元素
        observer.unobserve(img)


    })
}

// 定义 IntersectionObserver 的选项
const optins = {
    // 根元素的外边距
    rootMargin: '0px',
    // 交叉比例的阈值
    threshold: 0,
    // 根元素，null 表示浏览器视口
    root: null
}

export const useInView = (ref) => {
    // 创建一个 IntersectionObserver 实例，传入回调函数和选项
    const observer = new IntersectionObserver(callback, optins)
    // 在组件挂载后执行代码
    onMounted(() => {
        // 遍历引用对象的所有键，并对每个元素进行观察
        Object.keys(ref.value).forEach(e => observer.observe(ref.value[e]))
    })
}