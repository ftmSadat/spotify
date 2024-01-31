import {createRouter, createWebHistory} from 'vue-router'

const startView = () => import("@/views/GetStartedView.vue")
const chooseModeView = () => import("@/views/ChooseModeView.vue")
const chooseRegOrSignIN = () => import("@/views/ChooseRegisterOrSignIn.vue")
const signIn = () => import("@/views/SignIn.vue")

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/start',
            name: 'start',
            component: startView
        },
        {
            path: '/choose-mode',
            name: 'choose-mode',
            component: chooseModeView
        },
        {
            path: '/choose-reg-or-signIn',
            name: 'choose-reg-or-signIn',
            component: chooseRegOrSignIN
        },
        {
            path: "/sign-in",
            name: "sign-in",
            component: signIn
        },
        {
            path: "/register",
            name: "register",
            component: signIn
        }
    ]
})

export default router
