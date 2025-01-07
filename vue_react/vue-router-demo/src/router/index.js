// 路由配置
import {
    createRouter, //创建路由实例
    createWebHistory //路由模式
} from 'vue-router' //插件

//页面级别组件放到views文件夹下
import Home from '../views/Home.vue' //导入首页组件
import About from '../views/About.vue' //导入关于组件
import PostIndex from '../views/post/index/post-index.vue' //导入文章列表组件
import PostShow from '../views/post/show/post-show.vue' //导入文章详情组件
import PostMeta from '../views/post/show/components/post-meta.vue' //导入文章详情组件

//路由配置
const postRoutes = [
    {
        path: '/posts',
        name: 'post-index',
        component: PostIndex,
        // 路由向页面级别组件传参
        props:{
            sort:'popular'
        },
        meta: {
            title: '文章列表'
        }
    },
    {
        path: '/posts/:postId', //动态路由
        name: 'post-show',
        component: PostShow,
        props: true,
        children: [
            {
                path: 'meta',
                component: PostMeta,
            }
        ],
        meta: {
            title: '文章详情'
        }
    },
]

const routes = [
    {
        path: '/', // 路径
        component: Home, // 页面级别组件
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        meta: {
            title: '关于',
            requireAuth: true, // 页面级别组件权限控制
        },
        name: 'about',
        component: About,
    },
    ...postRoutes // 文章路由
]

//路由实例
const router = createRouter({//创建路由实例
    history: createWebHistory(), //路由模式
    routes: routes, //路由配置数组
})

//路由守卫
//每次路由
router.beforeEach((to, from, next) => {
    document.title = to.meta.title // 设置页面标题
    // to 目标路由对象 from 原路由对象 next 路由钩子函数
    console.log(to, from,'------------')
    if (to.meta.requireAuth) {
        console.log('需要先登录')
        next('/login') // 未登录跳转登录页面
    } // 页面级别组件权限控制
    next() // 放行
})
export default router