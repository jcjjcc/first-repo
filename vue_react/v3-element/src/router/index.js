import {createRouter, createWebHistory} from 'vue-router'

// 路由配置数组
const routes = [
    // 路由懒加载
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue'),
        meta: {
            title: '首页',
            requireLogin: true
        },
        children: [
            {
                path: 'about',
                name: 'About',
                component: () => import('../pages/About.vue'),
                meta: {
                    title: '关于',
                    requireLogin: true
                },
            }
        ] 
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/Login.vue'),
        meta: {
            title: '登录',
            requireLogin: false
        }
    }
]

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    // routes: routes  // key-value 一致 可以简写
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "掘金"  // || 和 &&
    if (to.meta.requireLogin) {
      // more  如果能拿到token 就放行
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
      return
    }
    next()
  })

export default router