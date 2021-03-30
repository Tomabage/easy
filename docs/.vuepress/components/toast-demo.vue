<template>
  <div>
    <e-button @click="auto">设置 zIndex</e-button>&nbsp;&nbsp;
    <e-button @click="auto">会自动关闭</e-button>&nbsp;&nbsp;
    <e-button @click="auto">点击按钮才关闭</e-button>&nbsp;&nbsp;
    <e-button @click="enableHtml">支持 HTML 语法</e-button>&nbsp;&nbsp;
    <br>
    <e-button @click="$toast('我是 toast 内容', { position: 'top' })">上方弹出</e-button>
    <e-button @click="$toast('我是 toast 内容', { position: 'middle' })">中间弹出</e-button>
    <e-button @click="$toast('我是 toast 内容', { position: 'bottom' })">下方弹出</e-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../../src/Toast'
import Button from '../../../src/Button'
import plugin from '../../../src/plugin'

Vue.use(plugin)
export default {
  components: {'e-toast': Toast, 'e-button': Button},
  methods: {
    auto() {
      this.$toast('我是 toast 内容', {
        zIndex: 30,
        autoClose: 5,
        closeButton: {
          text: '确定',
          callback: () => {
            console.log('回调执行了')
          }
        }
      })
    },
    enableHtml() {
      this.$toast('<strong style="color: red;">我是红色</strong>', {position: 'middle', enableHtml: true})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>