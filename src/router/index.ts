import {createRouter, createWebHistory} from 'vue-router'

const startView = () => import("@/views/GetStartedView.vue")
const chooseModeView = () => import("@/views/ChooseModeView.vue")

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/start',
            name: 'start',
            component: startView
        },    {
            path: '/choose-mode',
            name: 'choose-mode',
            component: chooseModeView
        },

    ]
})

export default router
