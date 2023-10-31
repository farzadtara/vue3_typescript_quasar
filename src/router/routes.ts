import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] =
    [{
        path: '/',
        component: () => import('../components/wizard.vue'),
    }];

export default routes;