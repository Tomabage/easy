<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
<!--      <button @click="visible=false">关闭</button>-->
    </div>
  </transition>
</template>

<script>
export default {
  name: 'EasySider',
  data() {
    return {
      visible: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sider {
  background: lightskyblue;
  width: 200px;
  position: relative;

  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}

.slide-enter, .slide-leave-to {
  margin-left: -200px;
}

.sider.slide-enter, .sider.slide-leave-to {
  margin-left: -200px;
}
</style>