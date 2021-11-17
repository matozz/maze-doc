---
sidebar_position: 2
---

# 使用

Material-UI 组件是独立工作的。 它们是自我支持的，只需注入所需样式即可运作。 您可以使用文档中演示的任意一个组件。 请参阅每个组件的 **[示例页面](../components/Button.mdx)**，这样能够知晓如何导入它们。

## 快速入门

下面是来帮助您入门的一个快速示例，而您仅需这些操作：

```jsx
import * as React from "react";
import ReactDOM from "react-dom";
import { TextField } from "maze-ui";

function App() {
  return <TextField label="Filled" />;
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

```jsx live
<Wrapper live>
  <TextField label="TextField" />
</Wrapper>
```

## Globals

Maze 使用体验可以通过一些您需要注意的重要全局变量来改善。

### Responsive meta tag

Maze 是先在移动设备上开发的，我们采用了首先为移动设备编写代码，然后根据需要使用 CSS media queries（CSS媒体查询）扩展组件的策略。 如要确保所有设备的正确渲染和触摸缩放，请将响应式可视区域的元标记添加到您的 `head` 元素中。

```jsx
<meta name="viewport" content="initial-scale=1, width=device-width" />
```