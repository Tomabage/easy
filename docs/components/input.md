---
title: 'Input - 输入框'
---
# 输入框

## 预览
&nbsp;
<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

## 使用方法
```vue
<template>
    <e-input></e-input>
    <e-input disabled></e-input>
    <e-input readonly></e-input>
    <e-input error="报错信息"></e-input>
    <br>
    <e-input :value="xxx"></e-input>
    <br>
    <span>value:{{xxx}}</span>
</template>
```

## 选项
Input组件可接受的选项：disabled readonly error 支持双向绑定。
#### 1. disabled
表示是否禁用，默认为false，禁用状态
#### 2. readonly
表示只读，与disabled类似。但是disabled不能被Tab键选中，<span style='color:#3eaf7c;background-color:#F8F8F8'>readonly</span> 可以被选中，不能修改。
#### 3. error
给Input添加 <span style='color:#3eaf7c;background-color:#F8F8F8'>error</span> 属性，会在该input右侧显示一个提示图标与文字，用于提示。
#### 4. v-model
预览
<ClientOnly>
<v-model-demo></v-model-demo>  
</ClientOnly>
代码
```vue
<template>
  <div>
    <e-input v-model="value"></e-input>
    <br>
    value:{{value}}
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return{
      value:'双向绑定'
    }
  },
}
</script>
```
