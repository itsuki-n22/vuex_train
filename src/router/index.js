import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routes from './routes'
import { authorizeToken } from './guards' // 名前付き関数だから {}内で宣言

Vue.use(Router)

const router = new Router({ routes }) // new Router(obj)という文法.
router.beforeEach(authorizeToken)

export default router