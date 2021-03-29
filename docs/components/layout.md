---
title: 'Layout - 布局'
---
# 布局
## 预览
&nbsp;
<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>

## 使用方法
```vue
<template>
  <div class="wrapper">
    <e-layout class="layout-wrapper">
      <e-header class="header-wrapper">header</e-header>
      <e-layout class="layout-wrapper">
        <e-sider class="sider-wrapper">sider</e-sider>
        <e-content class="content-wrapper">content</e-content>
      </e-layout>
      <e-footer class="footer-wrapper">footer</e-footer>
    </e-layout>
    <br>
    <e-layout class="layout-wrapper">
      <e-header class="header-wrapper">header</e-header>
      <e-content class="content-wrapper">content</e-content>
      <e-footer class="footer-wrapper">footer</e-footer>
    </e-layout>
    <br>
    <e-layout class="layout-wrapper">
      <e-header class="header-wrapper">header</e-header>
      <e-layout class="layout-wrapper">
        <e-sider class="sider-wrapper">sider</e-sider>
        <e-layout>
          <e-content class="content-wrapper">content</e-content>
          <e-footer class="footer-wrapper">footer</e-footer>
        </e-layout>
      </e-layout>
    </e-layout>
  </div>
</template>
```

## 选项
提供基础布局，样式可自定义
### 组件概述
- <span style='color:#3eaf7c;background-color:#F8F8F8'> e-layout </span>：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> e-header </span>：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> e-sider </span>：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> e-content </span>：内容部分，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> e-footer </span>：底部布局，其下可嵌套任何元素，只能放在 Layout 中。