# Easy - 一个 Vue UI 组件

[![Build Status](https://www.travis-ci.com/Tomabage/easy.svg?branch=master)](https://www.travis-ci.com/Tomabage/easy)

## 介绍

参考Ant Design 制作一个小组件库。

## 开始使用

1. 添加CSS样式
   
   使用本框架前，请在CSS中开启border-box
   ````
   *,*::before,*::after{box-sizing: border-box;}
   ````
2. 安装 easy
   ````
    npm i --save easy-z
   ````
3. 引入 easy
    ````
   import {Button,ButtonGroup,Icon,Col, Collapse, CollapseItem, Content, Footer, Header, Input, Layout, Popover
             , Row, Sider, Tabs, TabsHead, TabsBody, TabsItem, TabsPane, Toast,plugin} from 'easy-z'
   import 'easy-z/dist/index.css'
   import Vue from 'vue'
   
   Vue.use(plugin)
   export default {
     name: 'app',
     components: {
        'e-button': Button,
        'e-icon': Icon,
        'e-button-group':ButtonGroup,
        'e-input': Input,
        'e-col':Col,
        'e-row': Row,
        'e-layout': Layout,
        'e-content': Content,
        'e-footer': Footer,
        'e-header': Header,
        'e-sider': Sider,
        'e-tabs': Tabs,
        'e-tabs-head': TabsHead,
        'e-tabs-body': TabsBody,
        'e-tabs-item': TabsItem,
        'e-tabs-pane': TabsPane,
        'e-toast': Toast,
        'e-popover': Popover,
        'e-collapse':Collapse,
        'e-collapse-item':CollapseItem,     
     }
   }
   ````

## 文档
[Easy UI 官网](https://tomabage.github.io/easy/)
## 提问
[issues](https://github.com/Tomabage/easy/issues)
## 变更记录

## 联系我们

## 贡献代码
