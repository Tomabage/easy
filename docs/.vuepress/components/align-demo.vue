<template>
    <div class="align-wrapper">
      <e-row class="row" align="left">
        <e-col class="item" span="8">left</e-col>
        <e-col class="item" span="8">left</e-col>
      </e-row>
      <e-row class="row" align="center">
        <e-col class="item" span="8">center</e-col>
        <e-col class="item" span="8">center</e-col>
      </e-row>
      <e-row class="row" align="right">
        <e-col class="item" span="8">right</e-col>
        <e-col class="item" span="8">right</e-col>
      </e-row>
    </div>
</template>

<script>
import Col from '../../../src/col'
import Row from '../../../src/row'
export default {
  components:{
    'e-col':Col,
    'e-row':Row
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/helper";
.align-wrapper{
  text-align: center;
  color: $font-color;
  .row{
    padding-top: $wrapper-top;
    > .item{
      text-align: center;
      &:nth-child(odd){
        background: $background;}
      &:nth-child(even){
        background: lighten($background,20%);
        color:$font-color;
      }
    }
  }
}
</style>