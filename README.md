# Vue-05-前端面试项目冲刺，京东金融Vue组件化实战

## 2-1 环境及知识准备

- manage node version: nvm

```shell
<!-- 查看已经安装的node版本 -->
nvm ls
nvm install 8.9.1
nvm use 8.9.1
```

- git
- webpack
- babel
- ES6
- Sass
- Vue

## 4-1 css模块化设计

## 4-2 css模块化设计

- **element.scss**
- **layout.scss**
- **reset.scss**

## 4-3 js组件化及自适应mp4

- [CSS像素, 物理像素, 逻辑像素, 设备像素比, PPI, Viewport](https://github.com/jawil/blog/issues/21)
- CSS像素, 逻辑像素: px
- 设备像素比(dpr) = 物理像素 / CSS像素, retina 屏设备像素比是4
- rem: 相对于根标签 font-size 来计算
- em: 相对于父级元素来计算

```html
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,minimal-ui">
```

![viewport](static/Q1.png)
![width=device-width](static/Q2.png)
![width=device-width](static/Q3.png)

## 5-1, 5-2 首页-抽象组件设计

```node
npm i view-awesome-swiper -S
```

- **core/btn.vue**
- **core/panel.vue**
- **core/slider.vue**

## 5-3 首页-header组件

- **header.vue**

## 5-4 首页-slider组件

- **viewport.js**, **webpack.config.js** import viewport
> [hotcss](https://github.com/imochen/hotcss)移动端布局终极解决方案 --- 让移动端布局开发更加容易

- **hslider.vue**

## 5-6, 5-7, 5-8, 5-9: 新手特权

- **novice.vue**

```css
/* 从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度 */
box-sizing: border-box;
/* 超出显示...(two) */
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
/* 超出显示... */
```

## 5-10 首页-极速借贷-理财精选

- **borrow.vue**
- **money.vue**
- css伪元素解决线的问题

## 5-13: product

## 5-14: life

## 5-15: footer

## 5-16: navbar

## 6-1: money/mslider, ada, money

## 6-2: finance