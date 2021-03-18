import sinon from "sinon";
const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props', function() {
        it('接收autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接受closeButton', () => {
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭了',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭了')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接受enableHtml', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {enableHtml: true}
            })
            vm.$slots.default = ['<h1 id="test">标题</h1>']
            vm.$mount()
            let h1 = vm.$el.querySelector('#test')
            expect(h1).to.exist
        })
        it('接受position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'middle'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-middle')).to.eq(true)
        })
    })
})