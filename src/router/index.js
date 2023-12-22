import store from "../store"
import { createRouter, createWebHistory } from "vue-router"
import { motocityRoutes } from "@/router/motocity/motocityRoutes"
import { authenticationRoutes } from "@/router/authentication/authenticationRoutes"

const routes = [

    ...motocityRoutes,

    ...authenticationRoutes,

    {
        path: "/:pathMatch(.*)*",

        name: "Notfound",

        meta: { requiresAuth: true },

        component: () => import("@/views/error/ViewNotFound.vue")
    }
]

const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),

    routes,

    scrollBehavior() {

        return { top: 0 }
    }
})

router.beforeEach((to, from, next) => {

    if (to.meta.requiresAuth && !store.state.authentication?.cuenta?.token) {

        next('/')

    } else if (to.path === '/' && store.state.authentication?.cuenta?.token) {

        next('/go')

    } else {

        if (to.meta.requiresRole) {

            roleAccess(to, store, to.meta.requiresRole, next)

        } else {

            next()
        }
    }
})

function roleAccess(to, store, requiredRole, next) {

    if (store.state.authentication?.cuenta?.roluser === requiredRole) {

        next('/404')

    } else {

        next()
    }
}

export default router