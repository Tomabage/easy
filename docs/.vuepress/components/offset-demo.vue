<template>
    <div class="offset-wrapper">
      <e-row class="row">
        <e-col class="item" span="8"><span>col-8</span></e-col>
        <e-col class="item" span="8"><span>col-8</span></e-col>
        <e-col class="item" span="4" offset="4"><span>col-4</span></e-col>
      </e-row>
      <e-row class="row">
        <e-col class="item" span="8"><span>col-8</span></e-col>
        <e-col class="item" span="5" offset="3"><span>col-5</span></e-col>
        <e-col class="item" span="4" offset="4"><span>col-4</span></e-col>
      </e-row>
      <e-row class="row">
        <e-col class="item" span="2" offset="6"><span>col-2</span></e-col>
        <e-col class="item" span="5" offset="3"><span>col-5</span></e-col>
        <e-col class="item" span="4" offset="4"><span>col-4</span></e-col>
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
.offset-wrapper{
  padding-top: $wrapper-top;
  >.row{
    >.item{
      text-align: center;
      color: $font-color;
      > span{
        display: block;
        background: $background;
      }
    }
  }
}
</style>