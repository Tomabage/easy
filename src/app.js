import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('e-button', Button)
Vue.component('e-icon', Icon)
Vue.component('e-button-group', ButtonGroup)
Vue.component('e-input', Input)
Vue.component('e-row', Row)
Vue.component('e-col', Col)
Vue.component('e-layout', Layout)
Vue.component('e-header',Header)
Vue.component('e-content',Content)
Vue.component('e-sider',Sider)
Vue.component('e-footer',Footer)
Vue.component('e-toast',Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    created() {
        this.$toast('更多文字',{
            enableHtml: false
        })
    },
    methods:{
        showToast(){

        }
    }
})


