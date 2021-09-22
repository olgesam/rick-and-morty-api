import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/characters',
            component: () => import('./views/Characters')
        },
        {
            path: '/character/id/name',
            component: () => import('./components/CharacterItem')
        }
    ]
})