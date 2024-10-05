import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./components/pages/Home.vue');
const About= () => import('./components/pages/About.vue');
const ErrorPage = () => import('./components/pages/Error.vue');
// import Home from './components/pages/Home.vue';
// import About from './components/pages/About.vue';
// import ErrorPage from './components/pages/Error.vue';

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home',
        },
        {
            path: '/about',
            component: About,
            name: 'About',
        },
        {
            path: '/:catchAll(.*)',
            component: ErrorPage,
            name: 'Error'
        },
    ],
});
      
// router.beforeEach((to, from, next) => {
//     if(to.path == '/'){
//       next('/')
//     }else{
//       next()
//     }
// })


export default router;
 