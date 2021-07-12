import { mount } from '@vue/test-utils'
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'

describe('KbnLoginForm', ()=>{
  describe('property', ()=>{
    describe('validation', ()=>{
      let loginForm
      beforeEach(done => {
        loginForm = mount(KbnLoginForm, {
          porpsData: { onlogin: () => {}}
        })
        loginForm.vm.$nextTick(done)
      })

      describe('email', () => {
        describe('required', () => {
          describe('何も入力されていない', () => {
            it('validation.email.requierd が invalidであること', ()=>{
              loginForm.setData({ email: ''})
              expect(loginForm.vm.validation.email.required).to.equal(false)
            })
          })
        })
      })
    })
  })
})