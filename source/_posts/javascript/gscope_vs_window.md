---
title: window对象和全局作用域的关系
date: 2024-09-09
---

在浏览器环境中，`window` 对象和全局作用域之间的关系非常密切，但存在一些关键的区别和细微之处。以下是详细解释：

### `window` 对象

- **定义**：
  - `window` 对象代表浏览器窗口，并提供了许多属性和方法，用于控制浏览器窗口和操作文档（DOM）。
  - 它也是全局对象（Global Object），这意味着它是全局作用域的一部分。

- **属性和方法**：
  - `window` 对象包含了许多内置的属性和方法，例如 `alert()`, `console`, `document`, `location` 等。
  - 你可以在 `window` 对象上直接定义自定义属性和方法。

### 全局作用域

- **定义**：
  - 全局作用域是 JavaScript 代码在该作用域中声明和定义的所有变量、函数和对象的集合。在浏览器中，全局作用域的全局对象是 `window`。
  - 在全局作用域中定义的变量和函数可以在任何地方访问。

### 关系和区别

1. **全局变量与 `window` 对象的属性**：
   - 在浏览器环境中，全局变量（使用 `var` 声明或直接赋值）会成为 `window` 对象的属性。
     ```javascript
     var globalVar = "I'm a global variable";
     console.log(window.globalVar); // "I'm a global variable"
     
     globalVar2 = "I'm also a global variable";
     console.log(window.globalVar2); // "I'm also a global variable"
     ```

2. **`let` 和 `const` 声明的全局变量**：
   - 使用 `let` 和 `const` 声明的全局变量不会成为 `window` 对象的属性。
     ```javascript
     let globalLet = "I'm a global let variable";
     const globalConst = "I'm a global const variable";
     
     console.log(window.globalLet); // undefined
     console.log(window.globalConst); // undefined
     console.log(globalLet); // "I'm a global let variable"
     console.log(globalConst); // "I'm a global const variable"
     ```

3. **严格模式下的行为**：
   - 在严格模式下，未声明的变量（未使用 `var`、`let` 或 `const`）不会被隐式添加到 `window` 对象。
     ```javascript
     "use strict";
     globalVar3 = "I'm a global variable";
     console.log(window.globalVar3); // Throws ReferenceError: globalVar3 is not defined
     ```

4. **命名空间冲突**：
   - 由于全局变量和 `window` 对象的属性共享同一个命名空间，因此可能会发生命名冲突。
     ```javascript
     var alert = "This is a global variable";
     console.log(window.alert); // "This is a global variable"
     // 此时，window.alert 方法被覆盖，导致无法使用原生的 alert 方法。
     ```

5. **作用域链**：
   - 在全局作用域中，`window` 对象是作用域链的一部分。全局变量和函数声明会被添加到 `window` 对象上，除非使用 `let` 或 `const` 关键字。
   - 当访问变量时，JavaScript 引擎会首先查找当前作用域，然后逐级向上查找，直到全局作用域。

### 示例

以下是一些示例代码，展示了 `window` 对象和全局作用域之间的关系：

```javascript
// 使用 var 声明全局变量
var globalVar = "I'm a global variable";
console.log(window.globalVar); // "I'm a global variable"

// 直接赋值全局变量
globalVar2 = "I'm also a global variable";
console.log(window.globalVar2); // "I'm also a global variable"

// 使用 let 声明全局变量
let globalLet = "I'm a global let variable";
console.log(window.globalLet); // undefined
console.log(globalLet); // "I'm a global let variable"

// 使用 const 声明全局变量
const globalConst = "I'm a global const variable";
console.log(window.globalConst); // undefined
console.log(globalConst); // "I'm a global const variable"

// 在 window 对象上定义属性
window.customProp = "I'm a custom property";
console.log(customProp); // "I'm a custom property"
console.log(window.customProp); // "I'm a custom property"
```

### 总结

- 在浏览器环境中，`window` 对象是全局对象，代表浏览器窗口，并包含许多内置属性和方法。
- 在全局作用域中定义的变量和函数（使用 `var` 声明或直接赋值）会成为 `window` 对象的属性。
- 使用 `let` 和 `const` 声明的全局变量不会成为 `window` 对象的属性。
- 严格模式下，未声明的变量不会被隐式添加到 `window` 对象。
- 全局变量和 `window` 对象的属性共享同一个命名空间，可能会发生命名冲突。