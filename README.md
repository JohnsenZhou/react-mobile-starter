# react-mobile-starter &middot;  [![PyPI](https://img.shields.io/pypi/status/Django.svg)]()  [![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/JohnsenZhou/react-mobile-starter/blob/master/LICENSE)


> 基于 react + redux + react-router 构建的移动端单页微应用，适合于react、redux、react-router核心概念的理解与掌握。

## 前言
这个项目是介于 **[vue-mobile-starter(vue版本)](https://github.com/JohnsenZhou/vue-mobile-starter)** 之后并且完全仿照 **vue-mobile-starter** 功能、设计的 **react版本**。这个版本里引进了 **dva** 作为开发脚手架，跟 **vue-cli new XXX** 出来是同一概念。使用 **dva** 作为开发框架主要原因之一是我司的 **react 项目** 大部分由 **dva 框架** 搭建，而且全部都经受住了线上压力的考验，有兴趣的同学可以深入研究，可以带入到公司项目的生产中去。以下是 **dva** 的官方说法：

> 经过一段时间的自学或培训，大家应该都能理解 redux 的概念，并认可这种数据流的控制可以让应用更可控，以及让逻辑更清晰。
> 
> 但随之而来通常会有这样的疑问：概念太多，并且 reducer, saga, action 都是分离的（分文件）。
> 
> 这带来的问题是：
> 
> 编辑成本高，需要在 reducer, saga, action 之间来回切换
> 
> 不便于组织业务模型 (或者叫 domain model) 。比如我们写了一个 userlist 之后，要写一个 productlist，需要复制很多文件。
> 
> 还有一些其他的：
> 
> saga 书写太复杂，每监听一个 action 都需要走 fork -> watcher -> worker 的流程
> 
> entry 书写麻烦
> 
> ...
> 
> 而 dva 正是用于解决这些问题。


本项目虽说是一个十来个页面的小型项目，不过却涉及到 **react** 模块的全局和局部应用配置、第三方UI组件的使用、**react-router、react-redux** 的合理化配置和使用，非常适合于新手对 **react** 开发核心理念的掌握。

同一个项目用两种框架做最大的感触就是能明显感觉到两个框架之间的差异性,当你切身的体会了两者的差异性后，自然能够在不同的应用场景下选择合适的开发框架📌

> 
> 欢迎提 **issue**


## 开源技术支持
1. **[react](https://facebook.github.io/react/)**：一个用于构建用户界面的 JAVASCRIPT 库
1. **[react-router](https://reacttraining.com/react-router/)**：**react** 官方路由库.
1. **[react-redux](http://redux.js.org)**：**react** 状态管理框架.
1. **[dva](https://github.com/dvajs/dva)**：**支付宝** 开发的基于 **react + redux + react-router** 的轻型框架
1. **[roadhog](https://github.com/sorrycc/roadhog)**：与 **dva** 搭配的命令行工具，包含 **webpack**，自带数据 **mock** 功能
2. **[jsonplaceholder](http://jsonplaceholder.typicode.com)**：一个简单的在线模拟 **REST API** 服务器
3. **[axios](https://github.com/mzabriskie/axios)**：基于 **Promise** 的 HTTP 请求客户端,可同时在浏览器和 node.js 中使用
4. **[Material-UI](https://material-ui-1dab0.firebaseapp.com/)**：**Google** 使用 **React** 构建的设计UI组件

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
1. 掌握 **dva** 的 **[所有 API](https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md)**
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

[**在线浏览Demo请戳这里**](http://47.94.102.32:8002)

>1. 项目通过阿里云部署
>1. 想了解详细部署过程的同学请浏览 [**此文档**](https://github.com/JohnsenZhou/NodeApp-Deploy) 同时请切换 **[release](https://github.com/JohnsenZhou/react-mobile-starter/tree/release)** 分支


### 手机浏览请扫描下方二维码

![在线浏览](https://raw.githubusercontent.com/JohnsenZhou/NodeApp-Deploy/img/react-starter.png)

## License
[MIT](https://github.com/JohnsenZhou/react-mobile-starter/blob/master/LICENSE) license.
