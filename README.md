# Easy - 一个 Vue UI 组件

[![Build Status](https://www.travis-ci.com/Tomabage/easy.svg?branch=master)](https://www.travis-ci.com/Tomabage/easy)

## 介绍

这是我在学习Vue过程中做的一个UI框架，希望能对你有所帮助。

## 开始使用

1. 添加CSS样式
   
   使用本框架前，请在CSS中开启border-box
   ````
   *,*::before,*::after{box-sizing: border-box;}
   ````
   你还需要设置默认颜色等变量（后续会更新为SCSS变量）
    ````
     html {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
    ````
2. 安装 easy
   ````
    npm i --save easy-z
   ````
3. 引入 easy
    ````
   import {Button,ButtonGroup,Icon} from 'easy-z'
   import 'easy-z/dist/index.css'
   
   export default {
     name: 'app',
     components: {
        'e-button': Button,
        'e-icon': Icon
     }
   }
   ````

## 文档

## 提问

## 变更记录

## 联系我们

## 贡献代码