<template>
    <div>
      <e-button>默认按钮</e-button>
      <e-button icon="settings">默认按钮</e-button>
      <e-button icon="settings" icon-position="right">默认按钮</e-button>
      <e-button :loading="true">默认按钮</e-button>
      <e-button disabled>默认按钮</e-button>
    </div>
</template>

<script>
import Button from '../../../src/button'
export default {
  components:{
    'e-button':Button
  }
}
</script>