import { mount } from '@vue/test-utils'
import KbnButton from '@/components/atoms/KbnButton.vue'


describe('KbnButton', ()=>{
  describe('property', ()=>{
    describe('type', ()=>{
      describe('default', ()=>{
        it('kbn-button class をもつbutton要素で構成されること', ()=> {
          const button = mount(KbnButton)
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button')
        })
      })

      describe('button', () => {
        it('kbn-button class をもつbutton 要素で構成されていること', ()=>{
          const button = mount(KbnButton,{
            propsData: { type: 'button'}
          })
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button')
        })
      })
    })
  })
})