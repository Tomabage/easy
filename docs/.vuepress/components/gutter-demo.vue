<template>
  <div class="gutter-wrapper">
    <e-row gutter="30">
      <e-col class="item" span="8"><span>col-8;gutter-30</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-30</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-30</span></e-col>
    </e-row>
    <e-row gutter="20">
      <e-col class="item" span="8"><span>col-8;gutter-20</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-20</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-20</span></e-col>
    </e-row>
    <e-row gutter="10">
      <e-col class="item" span="8"><span>col-8;gutter-10</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-10</span></e-col>
      <e-col class="item" span="8"><span>col-8;gutter-10</span></e-col>
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
.gutter-wrapper{
  padding-top: $wrapper-top;
  .item{
    text-align: center;
    color: $font-color;
    > span{
      display: block;
      background: $background;
    }
  }
}
</style>