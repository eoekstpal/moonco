import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/SignIn.vue';
import Randing from '@/views/RandingView.vue';
import MyPage from '@/views/MyPageView.vue';

const router = createRouter({
	history: createWebHistory('/'),
	routes: [
		{
			path: '/',
			name: 'SignIn',
			component: SignIn,
		},
		{
			path: '/randing',
			name: 'Randing',
			component: Randing,
		},
		{
			path: '/myPage',
			name: 'MyPage',
			component: MyPage,
		},
	],
});

router.beforeEach((to, from, next) => {
	next();
});
router.afterEach(() => {});

export default router;
