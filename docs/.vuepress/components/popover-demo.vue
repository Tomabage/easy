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

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'

export default {
  components: {
    'e-popover': Popover,
    'e-button': Button
  }
}
</script>

<style lang="scss" scoped>

</style>