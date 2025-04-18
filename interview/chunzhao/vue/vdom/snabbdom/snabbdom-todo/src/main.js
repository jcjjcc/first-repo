import {
    init, // 初始化
    classModule, //类名模块
    propsModule, //属性模块
    styleModule, //行内样式模块
    eventListenersModule, //事件模块
    h //渲染函数
} from 'snabbdom'

//快速比对
/**
 * init 函数返回一个 patch 函数，
 * 该函数接收两个参数：旧的虚拟 DOM 节点和新的虚拟 DOM 节点，
 * 它会对比这两个节点并将差异应用到真实 DOM 上。
 * 
 */
const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule
])

const container = document.getElementById('app')

const vnode = h(
    'div#container.two.classes',
    {on: {click: () => alert('hello')}},
    [
        h('span', {style: {fontWeight: 'bold'}}, 'This is bold'),
        ' and this is just normal text',
        h('a', {props: {href: '/foo'}}, 'I\'ll take you places!')
    ]
)
console.log(vnode)
// 调用 patch 函数，将新的虚拟 DOM 应用到真实 DOM 上
patch(container, vnode)

/**
 * patch 函数通常接收两个参数：
第一个参数：可以是旧的虚拟 DOM 节点（VNode 对象），也可以是真实的 DOM 元素。若传入真实 DOM 元素，Snabbdom 会将其包装成虚拟 DOM 节点。
第二个参数：新的虚拟 DOM 节点（VNode 对象），由 h 函数生成。
 */
const newVnode = h(
    'div#container.two.classes',
    { on: { click: () => alert('new hello') } },
    [
        h('span', { style: { color: 'red' } }, 'This text is red'),
        ' and some other text',
        h('a', { props: { href: '/bar' } }, 'Go to another place!')
    ]
);

// 再次调用 patch 函数进行更新
setTimeout(() => {
    patch(vnode, newVnode);
}, 3000);