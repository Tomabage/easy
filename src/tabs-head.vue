<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "EasyTabsHead",
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (itemName, vm) => {
      let headLeft = this.$refs.head.getBoundingClientRect().x
      let {width, left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - headLeft}px`
    })
  }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: #1890ff;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid #ddd;

  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms
  }

  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    padding: 0 1em;
  }
}
</style>