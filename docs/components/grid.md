---
title: 'Grid - 栅格'
---

# 栅格
24栅格系统

## 预览
&nbsp;
<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

## 使用方法
```vue
<template>
    <div>
      <e-row>
        <e-col class="item" span="24">col-24</e-col>
      </e-row>
      <e-row>
        <e-col class="item" span="12">col-12</e-col>
        <e-col class="item" span="12">col-12</e-col>
      </e-row>
      <e-row>
        <e-col class="item" span="8">col-8</e-col>
        <e-col class="item" span="8">col-8</e-col>
        <e-col class="item" span="8">col-8</e-col>
      </e-row>
      <e-row>
        <e-col class="item" span="6">col-6</e-col>
        <e-col class="item" span="6">col-6</e-col>
        <e-col class="item" span="6">col-6</e-col>
        <e-col class="item" span="6">col-6</e-col>
      </e-row>
    </div>
</template>
```

## 选项
### Row 选项
#### 1. gutter （槽；排水沟）
栅格常常需要和间隔进行配合，通过给 Row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> gutter </span>属性, 可以让栅格有间隔。单位为<span style='color:#3eaf7c;background-color:#F8F8F8'> px </span>。

预览
<ClientOnly>
<gutter-demo></gutter-demo>
</ClientOnly>

代码
```vue
<template>
  <div>
    <e-row gutter="30">
      <e-col class="item" span="8"><span>col-8;gutter-30</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-30</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-30</span></e-col>
    </e-row>
    <e-row gutter="20">
      <e-col class="item" span="8"><span>col-8;gutter-20</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-20</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-20</span></e-col>
    </e-row>
    <e-row gutter="10">
      <e-col class="item" span="8"><span>col-8;gutter-10</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-10</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-10</span></e-col>
    </e-row>
  </div>
</template>
```

#### 2. align
通过给 Row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> align </span>属性, 可以定义其子组件在该节点里面的排版方式。  
预览  
<ClientOnly>
<align-demo></align-demo>
</ClientOnly>

代码
```vue
<template>
    <div class="align-wrapper">
      <e-row class="row" align="left">
        <e-col class="item" span="8">left</e-col>
        <e-col class="item" span="8">left</e-col>
      </e-row>
      <e-row class="row" align="center">
        <e-col class="item" span="8">center</e-col>
        <e-col class="item" span="8">center</e-col>
      </e-row>
      <e-row class="row" align="right">
        <e-col class="item" span="8">right</e-col>
        <e-col class="item" span="8">right</e-col>
      </e-row>
    </div>
</template>
```
### Col 选项
Col选项有span, offset以及响应式相关的设备属性ipad, narrowPc, pc, widePc
#### 1. span
栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> span </span>属性来实现。
例如：三个等宽的列可以使用`<i-col span="8">列</i-col>` 来创建其中一个，其余两个再复制两份。

#### 2. offset
使用<span style='color:#3eaf7c;background-color:#F8F8F8'> offset </span>属性,可以将列向右侧偏。  
例如，`offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。  
预览
<ClientOnly>
<offset-demo></offset-demo>
</ClientOnly>

代码
```vue
<template>
    <div class="offset-wrapper">
      <e-row class="row">
        <e-col class="item" span="8"><span>col-8</span></e-col>
        <e-col class="item" span="8"><span>col-8</span></e-col>
        <e-col class="item" span="4" offset="4"><span>col-4</span></e-col>
      </e-row>
      <e-row class="row">
        <e-col class="item" span="8"><span>col-8</span></e-col>
        <e-col class="item" span="5" offset="3"><span>col-5</span></e-col>
        <e-col class="item" span="4" offset="4"><span>col-4</span></e-col>
      </e-row>
      <e-row class="row">
        <e-col class="item" span="2" offset="6"><span>col-2</span></e-col>
        <e-col class="item" span="5" offset="3"><span>col-5</span></e-col>
        <e-col class="item" span="4" offset="4"><span>col-4</span></e-col>
      </e-row>
    </div>
</template>
```

#### 3. 响应式
支持ipad, narrowPc, pc, widePc 四种设备的响应式设置
若不给 Col 这四个属性，默认为 手机端响应，span值为24。  
<span style='color:red;'>注意： 若设置这四个属性，则需要对应属性 + offset 的值的和为24，具体看代码。</span>  
预览
<ClientOnly>
<response-demo></response-demo>
</ClientOnly>

代码
```vue
<template>
  <div class="response-wrapper">
    <e-row class="row">
      <e-col class="item"
             span="24"
             :ipad="{span:8}"
             :narrow-pc="{span:4}"
             :pc="{span: 2}"
             :wide-pc="{span:1}"
      >
       <span>
         col
       </span>
      </e-col>
      <e-col class="item"
             span="24"
             :ipad="{span:16}"
             :narrow-pc="{span:20}"
             :pc="{span: 20,offset:2}"
             :wide-pc="{span:21}"
      >
        <span>col</span>
      </e-col>
    </e-row>
  </div>
</template>
```
