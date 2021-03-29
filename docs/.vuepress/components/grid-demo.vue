<template>
    <div class="grid-wrapper">
      <e-row class="row">
        <e-col class="item" span="24">col-24</e-col>
      </e-row>
      <e-row class="row">
        <e-col class="item" span="12">col-12</e-col>
        <e-col class="item" span="12">col-12</e-col>
      </e-row>
      <e-row>
        <e-col class="item" span="8">col-8</e-col>
        <e-col class="item" span="8">col-8</e-col>
        <e-col class="item" span="8">col-8</e-col>
      </e-row>
      <e-row class="row">
        <e-col class="item" span="6">col-6</e-col>
        <e-col class="item" span="6">col-6</e-col>
        <e-col class="item" span="6">col-6</e-col>
        <e-col class="item" span="6">col-6</e-col>
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

.grid-wrapper{
  >.row{
    padding: .2em;
    >.item{
      text-align: center;
      color:$font-color;
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