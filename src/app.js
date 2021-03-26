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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('e-button', Button)
Vue.component('e-icon', Icon)
Vue.component('e-button-group', ButtonGroup)
Vue.component('e-input', Input)
Vue.component('e-row', Row)
Vue.component('e-col', Col)
Vue.component('e-layout', Layout)
Vue.component('e-header', Header)
Vue.component('e-content', Content)
Vue.component('e-sider', Sider)
Vue.component('e-footer', Footer)
Vue.component('e-toast', Toast)
Vue.use(plugin)
Vue.component('e-tabs', Tabs)
Vue.component('e-tabs-head', TabsHead)
Vue.component('e-tabs-body', TabsBody)
Vue.component('e-tabs-item', TabsItem)
Vue.component('e-tabs-pane', TabsPane)
Vue.component('e-popover', Popover)
Vue.component('e-collapse', Collapse)
Vue.component('e-collapse-item', CollapseItem)


new Vue({
    el: '#app',
    data: {
        selectedTab: 'news'
    },
    methods: {}
})

