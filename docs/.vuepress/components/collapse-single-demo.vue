<template>
  <div>
    <e-collapse :selected.sync="selected" single>
      <e-collapse-item name="1" title="标题1">更多内容111</e-collapse-item>
      <e-collapse-item name="2" title="标题2">更多内容222</e-collapse-item>
      <e-collapse-item name="3" title="标题3">更多内容333</e-collapse-item>
    </e-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
  components: {
    'e-collapse': Collapse,
    'e-collapse-item': CollapseItem
  },
  data() {
    return {
      selected: ['1']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>