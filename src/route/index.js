import { createRouter, createWebHashHistory } from "vue-router";

import BlogIndex from "../pages/BlogIndex.vue"
import OtherIndex from "../pages/OtherIndex.vue"


const routes = [
    { path: "/", redirect: "/BlogIndex" },
    {
        path: "/BlogIndex",
        name: "BlogIndex",
        component: BlogIndex
    },
    {
        path: "/OtherIndex",
        name: "OtherIndex",
        component: OtherIndex
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router