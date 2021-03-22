<template>
    <div class="tabs-body">
      <slot></slot>
    </div>
</template>

<script>
export default {
name: "EasyTabsBody",
  inject:['eventBus'],
}
</script>

<style lang="scss" scoped>
.tabs-body{

}
</style>