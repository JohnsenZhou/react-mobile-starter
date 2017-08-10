# react-mobile-starter


> 基于 react + redux + react-router 构建的移动端单页微应用，适合于react、redux、react-router核心概念的理解与掌握。

## 前言
这个项目是介于 **[vue-mobile-starter(vue版本)](https://github.com/JohnsenZhou/vue-mobile-starter)** 之后并且完全仿照 **vue-mobile-starter** 功能、设计的 **react版本**。

同一个项目用两个框架做

本项目虽说是一个十来个页面的小型项目，不过却涉及到**react**模块的全局和局部应用配置、第三方UI组件的使用、**vuex stroe**的合理化配置、**vue-router**编程式的导航，路由子路由配置，路由信息对象等。非常适合于新手对**vue**核心开发理念的掌握。

> 觉得此项目对您有帮助，可以点右上角 **star** 支持一下😊
> 
> 欢迎提**issue**


## 开源技术支持

1. **[dva](https://github.com/dvajs/dva)**：支付宝开发的基于 **react + redux + react-router** 的轻型框架
1. **[roadhog](https://github.com/sorrycc/roadhog)**：与 **dva** 搭配的命令行工具，包含 **webpack**，自带数据 **mock** 功能
2. **[jsonplaceholder](http://jsonplaceholder.typicode.com)**：一个简单的在线模拟REST API服务器
3. **[axios](https://github.com/mzabriskie/axios)**：基于Promise 的 HTTP 请求客户端,可同时在浏览器和 node.js 中使用
4. **[Material-UI](https://material-ui-1dab0.firebaseapp.com/)**：Google使用 **React** 构建的设计UI组件

## 如何开发

``` bash
# 克隆本仓库
git clone https://github.com/JohnsenZhou/react-mobile-starter.git

# 进入仓库目录
cd react-mobile-starter

# 安装依赖
npm install

# 启动项目，本地浏览地址 => localhost:8080
npm start

# 打包压缩
npm run build

```
## Dva 框架
以下能帮你更好地理解和使用 **dva**：

1. 理解 **dva** 的 **[8 个概念](https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md)** ，以及他们是如何串起来的
1. 掌握 **dva** 的**[所有 API](https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md)**
1. 查看 **[dva 知识地图](https://github.com/dvajs/dva-knowledgemap)** ，包含 **ES6, React, dva** 等所有基础知识
1. 查看 **[更多 FAQ](https://github.com/dvajs/dva/issues?q=is%3Aissue+is%3Aclosed+label%3Afaq)**，看看别人通常会遇到什么问题
1. 如果你基于 dva-cli 创建项目，最好了解他的 **[配置方式](https://github.com/sorrycc/roadhog#配置)**


> **dva** 框架中对数据流向的处理(见下图)
>
 
![](https://camo.githubusercontent.com/c826ff066ed438e2689154e81ff5961ab0b9befe/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f505072657245414b62496f445a59722e706e67)

## 目录结构
```
.
├── README.md            // README文件
├── public               // 静态资源及index入口文件
├── node_modules         
├── package.json         // npm 配置文件
├── .roadhogrc           // roadhog 配置文件
├── .roadhogrc.mock      // roadhog Mock数据配置文件
├── src                  // 项目开发目录
│   ├── index.js         // 项目入口文件
│   ├── assets           // 资源文件夹
│   ├── components       // react通用组件
│   ├── router.js        // react-router配置文件
│   ├── router           // router对应页面
│   ├── services         // 接口文件
│   ├── utils            // js通用工具组件
│   └── models           // redux数据处理文件
└── LICENSE              // 证书

```

## 效果演示

[**在线浏览Demo请戳这里**](http://47.94.102.32:8001)

>1. 项目通过阿里云部署
>1. 想了解详细部署过程的同学请浏览 [**此文档**](https://github.com/JohnsenZhou/NodeApp-Deploy)


### 手机浏览请扫描下方二维码

![在线浏览](https://raw.githubusercontent.com/JohnsenZhou/NodeApp-Deploy/img/qrcode.png)

## License
[MIT](https://github.com/epicmaxco/vuestic-admin/blob/master/LICENSE) license.
