<template>
  <button class="e-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <e-icon class="icon" v-if="icon && !loading" :name="icon"/>
    <e-icon class="loading icon" v-if="loading" name="loading"/>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
import  Icon from './icon'
export default {
  components:{
    'e-icon':Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size:14px;
$button-height:32px;
$button-bg:white;
$button-active-bg:#eee;
$border-radius:4px;
$color:#333;
$border-color:#999;
$border-color-hover:#666;

@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
}

.e-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: lightskyblue;
  }

  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: .3em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
  }
}

.loading {
  animation: load 1s infinite linear;
}
</style>