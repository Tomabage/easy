import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('e-button', Button)
Vue.component('e-icon', Icon)
Vue.component('e-button-group', ButtonGroup)
Vue.component('e-input', Input)
Vue.component('e-row',Row)
Vue.component('e-col',Col)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message:'hi'
    }
})


