import { createWebHashHistory,createRouter } from "vue-router";
import HelloWorld from '@/components/HelloWorld.vue';
import LoginComp from '@/components/LoginComp.vue';
import ProfileComp from '@/components/ProfileComp.vue';
const routes = [
    {
        name:'HelloWorld',
        path:'/',
        component:HelloWorld
    },
    {
        name:'loginComp',
        path:'/login',
        component:LoginComp
    },
    {
        name:'ProfileComp',
        path:'/profile',
        component:ProfileComp
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;