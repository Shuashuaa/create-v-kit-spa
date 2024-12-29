import { createRouter, createWebHistory } from "vue-router";

const Home = () => import('./views/HomeView.vue');
const About = () => import('./components/About.vue');

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHistory('/ProjectName/'),
    base: '/ProjectName/',
    routes:[
        {
            path:'/',
            component: Home,
            name: 'Home'
        },
        {
            path:'/about',
            component: About,
            name: 'About'
        }
    ]
});

export default router;