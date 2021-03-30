---
title: 'Tabs - 标签'
---
# 标签

## 预览
&nbsp;
<ClientOnly>
 <tabs-demo></tabs-demo>
</ClientOnly>

## 使用方法
该组件的 e-tabs-item, e-tabs-pane必须有一一对应的name。
```vue
<template>
  <div>
    <e-tabs :selected.sync="selectedTab">
      <e-tabs-head>
        <e-tabs-item name="tab1">
          <e-icon name="settings"></e-icon>
          Tab1
        </e-tabs-item>
        <e-tabs-item name="tab2">Tab2</e-tabs-item>
        <e-tabs-item name="tab3">Tab3</e-tabs-item>
        <e-tabs-item name="tab4" disabled>Tab4</e-tabs-item>
      </e-tabs-head>
      <e-tabs-body>
        <e-tabs-pane name="tab1">内容1</e-tabs-pane>
        <e-tabs-pane name="tab2">内容2</e-tabs-pane>
        <e-tabs-pane name="tab3">内容3</e-tabs-pane>
        <e-tabs-pane name="tab4">内容4</e-tabs-pane>
      </e-tabs-body>
    </e-tabs>
  </div>
</template>
```
## 选项
### 1. 默认高亮选中状态
   e-tabs 需要设置<span style='color:#3eaf7c;background-color:#F8F8F8'> selected </span>属性来确定默认标签。  
   你可以这样：`:selected.sync="selectedTab"`,其中 <span style='color:#3eaf7c;background-color:#F8F8F8'>selectedTab </span>是你需要传递的默认值。  
   并且该标签的子组件应该是 e-tabs-head 和 e-tabs-body ，否则你会得到一个警告。
### 2. disabled 状态
   <span style='color:#3eaf7c;background-color:#F8F8F8'>disabled</span> 属性用于 e-tabs-item 标签，可以设置该标签的不可用状态。