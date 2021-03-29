# 快速上手

## 引入必要资源
```javascript
import {Button} from "easy-z";
import "easy-z/dist/index.css";
```

## 注册组件
```javascript
export default {
  name: "ComponentName",
  components: {
    "e-button": Button,
  },
}
```

## 使用
代码：
```vue
<template>
  <div>
    <e-button>默认按钮</e-button>
  </div>
</template>
```

