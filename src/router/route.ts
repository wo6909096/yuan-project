import Home from '../components/Home/index.vue';
import Todo from '../pages/todo/index.vue';
export default [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/todo',
        component: Todo
    },
    {
        path: '/',
        redirect: '/todo'
    }
];