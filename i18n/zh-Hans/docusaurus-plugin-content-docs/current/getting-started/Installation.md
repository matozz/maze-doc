---
sidebar_position: 1
---

# 安装

Maze 可以通过 **[npm 包](https://www.npmjs.com/package/maze-ui)** 来安装。

## npm

若想安装并写入您的 package.json 依赖包，请运行以下命令：

```shell
npm install maze-ui
```

## yarn

```shell
yarn add maze-ui
```

## Roboto 字体

在设计 Material-UI 时我们使用了 **[Roboto](https://fonts.google.com/specimen/Roboto)**字体。 因此，我们推荐您遵循此说明来载入字体。 例如，通过 Google Web Fonts 引入：

```jsx
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```

或者通过 Fontsource npm 包来安装：

```shell
yarn add @fontsource/roboto 

npm install @fontsource/roboto
```

Full documentation can be found **[here](https://fontsource.org/docs/introduction)**.

## CDN

如果您已经开始将 Maze 融入一些最基本的前端基础架构，您的原型开发就如虎添翼。

```
https://unpkg.com/maze-ui@latest/dist/index.js
```

:::info 警告

⚠️ 尽管我们不赞成在生产环境中使用这种方式 —— 无论实际使用哪些组件，客户端必须下载整个库，而这将会影响到整体性能和带宽利用率。

⚠️ 带有 `latest` 标签的链接会指向我们最新版本的库。 这个指向是不稳定的，它会随着我们发布的新版本而改变。 您应该考虑使用一个具体的版本，如 `maze-ui@1.1.9`。

:::