import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: '关于',
            requiredAuth: true
        },
        component: () => import('../views/About.vue')
    },
    {
        path: '/news',
        name: 'news',
        meta: {
            title: '新闻'
        },
        component: () => import('../views/News.vue'),
        children: [
            {
                // path: 'detail',
                // name: 'detail',
                // component: () => import('../views/Details.vue'),


                // 动态路由 param传参
                // ? 表示可选参数
                path:'detail/:id/:title/:content',
                name: 'detail',
                component: () => import('../views/Details.vue'),


                // // // 1.对象
                props:true,

                // //2.函数 
                // props(route) {
                //     console.log(route)
                //     return route.query
                // }
                // // 3.对象

            }
        ]
    },
    {
        path: '/',
        redirect:'/home'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Vue Router'
    if (to.meta.requiredAuth) {
         next('/')
    }else next()
})
export default router