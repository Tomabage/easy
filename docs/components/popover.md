---
title: 'Popover - 气泡卡片'
---

# 气泡卡片
## 预览
&nbsp;
<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

<hr>


## 使用方法
```vue
<template>
  <div>
    <e-popover position="bottom">
      <template slot="content">
        popover中的内容
      </template>
      <e-button>点击按钮下方显示内容</e-button>
    </e-popover>
    <e-popover>
      <template slot="content">
        popover中的内容
      </template>
      <e-button>点击显示</e-button>
    </e-popover>
    <e-popover trigger="hover">
      <template slot="content">
        popover中的内容
      </template>
      <e-button>hover显示</e-button>
    </e-popover>
  </div>
</template>
```
## 选项
Popover组件有两个选项：position用于设置气泡卡片显示的方位；trigger用于设置如何触发事件
### 1. position
<span style='color:#3eaf7c;background-color:#F8F8F8'> position </span> 默认为<span style='color:#3eaf7c;background-color:#F8F8F8'> top </span>,可选参数有<span style='color:#3eaf7c;background-color:#F8F8F8'> top </span>,<span style='color:#3eaf7c;background-color:#F8F8F8'> left </span>,<span style='color:#3eaf7c;background-color:#F8F8F8'> right </span>,<span style='color:#3eaf7c;background-color:#F8F8F8'> bottom </span>

### 2. trigger
<span style='color:#3eaf7c;background-color:#F8F8F8'> trigger </span>默认为<span style='color:#3eaf7c;background-color:#F8F8F8'> click </span>,可选参数有<span style='color:#3eaf7c;background-color:#F8F8F8'> click </span>和<span style='color:#3eaf7c;background-color:#F8F8F8'> hover </span>
