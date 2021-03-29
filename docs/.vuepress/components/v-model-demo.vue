<template>
  <div>
    <e-input v-model="value"></e-input>
    <br>
    value:{{value}}
  </div>
</template>

<script>
import Input from '../../../src/input'
export default {
  data(){
    return{
      value:'双向绑定'
    }
  },
  components:{
    'e-input':Input
  }
}
</script>

<style lang="scss" scoped>

</style>