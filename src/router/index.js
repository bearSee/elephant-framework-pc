import Vue from 'vue';
import VueRouter from 'vue-router';

const writingTopic = () => import(/* webpackChunkName: "writing-topic" */ '@/views/writing-topic');
const userTasks = () => import(/* webpackChunkName: "user-tasks" */ '@/views/user-tasks');
const taskDetail = () => import(/* webpackChunkName: "task-detail" */ '@/views/task-detail');

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/writingTopic',
    },
    {
        path: '/writingTopic',
        name: 'writingTopic',
        component: writingTopic,
    },
    {
        path: '/userTasks',
        name: 'userTasks',
        component: userTasks,
    },
    {
        path: '/taskDetail',
        name: 'taskDetail',
        component: taskDetail,
    },
];

const router = new VueRouter({
    // mode: 'history',
    // base: '/',
    routes,
});

export default router;
