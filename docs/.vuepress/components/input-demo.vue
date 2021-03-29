<template>
    <div>
      <e-input></e-input>
      <e-input disabled></e-input>
      <e-input readonly></e-input>
      <e-input error="报错信息"></e-input>
      <br>
      <e-input :value="xxx"></e-input>
      <br>
      <span>value:{{xxx}}</span>
    </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  data(){
    return {
      xxx:'双向绑定'
    }
  },
components:{
  'e-input':Input
}
}
</script>

<style lang="scss" scoped>
div{
  padding-top: 8px;
}
</style>