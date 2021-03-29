<template>
  <div class="group">
    <e-button-group>
      <e-button>默认按钮</e-button>
      <e-button>默认按钮</e-button>
      <e-button>默认按钮</e-button>
    </e-button-group>
  </div>
</template>

<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'

export default {
  components: {
    'e-button': Button,
    'e-button-group': ButtonGroup
  }
}
</script>

<style lang="scss" scoped>
.group{
  padding-top: 8px;
}
</style>