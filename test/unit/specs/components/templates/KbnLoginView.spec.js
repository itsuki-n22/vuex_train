import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('KbnLoginView', ()=>{
  let actions
  let $router
  let store
  let LoginFormComponentsStub
  const triggerLogin = (loginView, target) => {
    const loginForm = loginView.find(target)
    loginForm.vm.onlogin('foo@domain.com', '12345678')
  }

  beforeEach(() => {
    LoginFormComponentsStub = {
      name: 'KbnLoginForm',
      props: ['onlogin'],
      render: h => h('p', ['login form'])
    }
  })

  $router = {
    push: sinon.spy()
  }

  actions = {
    login: sinon.stub()
  }

  store = new Vuex.Store({
    state: {},
    actions
  })

  describe('login', ()=>{
    let loginView
    describe('success', ()=>{
      beforeEach(done => {
        loginView = mount(KbnLoginView, {
          mocks: { $router },
          stubs: {
            'kbn-login-form': LoginFormComponentsStub
          },
          store,
          loalVue
        })
      })

      it('ボードページのルートにリダイレクトすること', done => {
        actions.login.resolves()
        triggerLogin(loginView, LoginFormComponentsStub)

        loginView.vm.$nextTick(() => {
          expect($router.push.called).to.equal(true)
          expect($router.push.args[0][0].path).to.equal('/')
          done()
        })
      })
    })
  })
})