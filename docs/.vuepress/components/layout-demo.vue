<template>
  <div class="wrapper">
    <e-layout class="layout-wrapper">
      <e-header class="header-wrapper">header</e-header>
      <e-layout class="layout-wrapper">
        <e-sider class="sider-wrapper">sider</e-sider>
        <e-content class="content-wrapper">content</e-content>
      </e-layout>
      <e-footer class="footer-wrapper">footer</e-footer>
    </e-layout>
    <br>
    <e-layout class="layout-wrapper">
      <e-header class="header-wrapper">header</e-header>
      <e-content class="content-wrapper">content</e-content>
      <e-footer class="footer-wrapper">footer</e-footer>
    </e-layout>
    <br>
    <e-layout class="layout-wrapper">
      <e-header class="header-wrapper">header</e-header>
      <e-layout class="layout-wrapper">
        <e-sider class="sider-wrapper">sider</e-sider>
        <e-layout>
          <e-content class="content-wrapper">content</e-content>
          <e-footer class="footer-wrapper">footer</e-footer>
        </e-layout>
      </e-layout>
    </e-layout>
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Sider from '../../../src/sider'
import Content from '../../../src/content'
import Footer from '../../../src/footer'

export default {
  components: {
    'e-layout': Layout,
    'e-header': Header,
    'e-sider': Sider,
    'e-content': Content,
    'e-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/helper";

.wrapper {
  > .layout-wrapper { height: 30vh;
    > .header-wrapper { height: 3em; background: $background; }
    > .content-wrapper { background: lighten($background, 40%); }
    > .layout-wrapper { height: 6em;
      > .sider-wrapper { width: 3em; background: lighten($background, 15%); }
      > .content-wrapper { background: lighten($background, 40%); }
      > .layout-wrapper{
        > .content-wrapper{ background: lighten($background, 40%); }
        > .footer-wrapper { background: $background; }
      }
    }
    > .footer-wrapper { background: $background; }
  }
}
</style>