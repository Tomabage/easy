const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('e-tabs', Tabs)
Vue.component('e-tabs-head', TabsHead)
Vue.component('e-tabs-body', TabsBody)
Vue.component('e-tabs-item', TabsItem)
Vue.component('e-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在', () => {
        expect(Tabs).to.exist
    })

    it('接受selected属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <e-tabs selected="news">
        <e-tabs-head>
            <e-tabs-item name="news">新闻</e-tabs-item>
            <e-tabs-item name="sports">体育</e-tabs-item>
            <e-tabs-item name="cars">汽车</e-tabs-item>
        </e-tabs-head>
        <e-tabs-body>
            <e-tabs-pane name="news">新闻相关资讯</e-tabs-pane>
            <e-tabs-pane name="sports">体育相关资讯</e-tabs-pane>
            <e-tabs-pane name="cars">汽车相关资讯</e-tabs-pane>
        </e-tabs-body>
    </e-tabs>        
        `
        let vm = new Vue({
            el:div,
        })
        vm.$nextTick(()=>{
            let x = vm.$el.querySelector(`.tabs-item[data-name="news"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })
    it('可以接受direction prop',()=>{

    })
})