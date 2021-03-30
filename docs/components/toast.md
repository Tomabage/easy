---
title: 'Toast - 弹出提示框'
---

# 弹出提示框

## 预览
&nbsp;
<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

## 使用方法
引入Toast组件, Vue, plugin.js
```vue
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
```

## 选项
### 1. zIndex  
   此选项用于设定 Toast 组件在当前堆叠上下文中的堆叠层级。默认为20。(在使用 vuepress 编写文档时发现其值为 20)  
   若你的项目不可见 Toast 组件，尝试传入一个 <span style='color:#3eaf7c;background-color:#F8F8F8'>zIndex </span> 试试。
### 2. autoClose
   此选项可以设定 Toast 自动关闭的延时。单位为“ 秒 ”，默认延时 5 秒后自动关闭。 
### 3. closeButton
Toast 组件的右侧按钮文本可编辑，并且支持传入一个回调。 closeButton 选项接收一个对象。对象包括 text 与 callback 属性。用于设定按钮的文本与回调。 
### 4. enableHtml
Toast 组件还支持 HTML 语法，该功能默认关闭，你需要传递一个 enableHTML 参数来开启它, `enableHtml:true` 。 开启后就可以在 Toast 内容区域写 HTML 语法。
### 5. position
该选项可设置 Toast 组件弹出的位置，可选参数有 top, middle, bottom