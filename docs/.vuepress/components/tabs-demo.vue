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

<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsPane from '../../../src/tabs-pane'
import TabsItem from '../../../src/tabs-item'
import Icon from '../../../src/icon'

export default {
  components: {
    'e-tabs': Tabs,
    'e-tabs-head': TabsHead,
    'e-tabs-body': TabsBody,
    'e-tabs-pane': TabsPane,
    'e-tabs-item': TabsItem,
    'e-icon': Icon
  },
  data() {
    return {
      selectedTab: 'tab1'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>