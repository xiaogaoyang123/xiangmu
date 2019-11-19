import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import frist from '@/components/frist'
import detail from '@/components/detail'
import about from '@/components/about'
import person from '@/components/person'
const User = {
    template: '<div><h1>User {{ $route.params.id }}</h1> <router-view/></div>'
}
const UserProfile = { template: '<div>User:第一个UserProfile子组件</div>' }
const UserPosts = { template: '<div>User：第二个UserPosts组件</div>' }
const fbox = {
    template: '<div><h1>父组件： 我是父组件</h1> <router-view/></div>'
}
const sononebox = {
    template: '<div><h1>第一个子组件</h1></div>'
}
const sontwobox = {
    template: '<div><h1>第二个子组件</h1></div>'
}
const NotFount = { template: `<div><h2>404您访问的页面不存在</h2></div>` }
Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'one',
    routes: [{
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'frist',
            component: frist
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/person',
            name: 'person',
            component: person
        },
        {
            path: '/user/:id',
            component: User,
            children: [{
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'profile',
                    component: UserProfile
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: 'posts',
                    component: UserPosts
                }
            ]
        },
        {
            path: '/fbox',
            component: fbox,
            children: [
                { path: '/', name: 'sononebox', component: sononebox },
                { path: '/sontwobox', name: 'sontwobox', component: sontwobox },
            ]
        },
        {
            path: '*',
            name: 'NotFount',
            component: NotFount,
            redirect: (to => {
                console.log(to);
                if (to.path === '/aaa') {
                    return '/detail'
                } else if (to.path === '/bbb') {
                    return '/fbox'
                } else {
                    return '/'
                }
            })
        },

    ]
})