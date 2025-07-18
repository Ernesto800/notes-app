import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Notes from "../pages/Notes.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/notes",
            name: "notes",
            component: Notes,
        },
        
    ],
});

export default router;