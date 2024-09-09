---
title: 在js中的全局定义变量和window上定义属性区别
date: 2024-09-09
---


在 JavaScript 中，全局定义的变量和在 `window` 对象上定义的属性有一些细微但重要的区别。以下是详细解释：

### 全局变量

当你在 JavaScript 中定义全局变量时，有几种方式：

1. **使用 `var` 关键字**：
   ```javascript
   var globalVar = "I'm a global variable";
   ```

2. **在全局作用域中赋值变量（不使用 `var`、`let` 或 `const`）**：
   ```javascript
   globalVar2 = "I'm also a global variable";
   ```

3. **使用 `let` 或 `const` 关键字**（注意：这在严格模式下不会将变量添加到 `window` 对象）：
   ```javascript
   let globalLet = "I'm a global let variable";
   const globalConst = "I'm a global const variable";
   ```

### `window` 对象上的属性

在浏览器环境中，`window` 对象代表浏览器窗口。你可以直接在 `window` 对象上定义属性：

```javascript
window.globalVar3 = "I'm a window property";
```

### 区别

1. **作用域和可见性**：
   - 使用 `var` 声明的全局变量会被添加到 `window` 对象：
     ```javascript
     var globalVar = "I'm a global variable";
     console.log(window.globalVar); // "I'm a global variable"
     ```
   - 在全局作用域中赋值的变量（不使用 `var`、`let` 或 `const`）也会被添加到 `window` 对象：
     ```javascript
     globalVar2 = "I'm also a global variable";
     console.log(window.globalVar2); // "I'm also a global variable"
     ```
   - 使用 `let` 或 `const` 声明的全局变量不会被添加到 `window` 对象，但仍然在全局作用域中可见：
     ```javascript
     let globalLet = "I'm a global let variable";
     const globalConst = "I'm a global const variable";
     console.log(window.globalLet); // undefined
     console.log(window.globalConst); // undefined
     ```

2. **严格模式**：
   - 在严格模式下，未使用 `var`、`let` 或 `const` 声明的变量不会被隐式添加到 `window` 对象。
     ```javascript
     "use strict";
     globalVar4 = "I'm a global variable";
     console.log(window.globalVar4); // Throws ReferenceError: globalVar4 is not defined
     ```

3. **声明与赋值**：
   - 在 `window` 对象上直接定义属性只是简单的赋值，不涉及变量声明：
     ```javascript
     window.globalVar3 = "I'm a window property";
     console.log(globalVar3); // "I'm a window property"
     ```

4. **变量提升**（Hoisting）：
   - 使用 `var` 声明的全局变量会被提升到作用域的顶部，但赋值会在原位置进行：
     ```javascript
     console.log(globalVar); // undefined
     var globalVar = "I'm a global variable";
     ```
   - 使用 `let` 或 `const` 声明的变量不会被提升，访问它们会导致 `ReferenceError`：
     ```javascript
     console.log(globalLet); // ReferenceError: Cannot access 'globalLet' before initialization
     let globalLet = "I'm a global let variable";
     ```

5. **命名冲突**：
   - 全局变量可能会与 `window` 对象上的现有属性或方法发生冲突，从而导致意外的行为。
   - 因此，在定义全局变量时，需谨慎选择名称以避免冲突。

### 总结

- **全局变量**：使用 `var` 声明的全局变量会被添加到 `window` 对象。使用 `let` 或 `const` 声明的全局变量不会被添加到 `window` 对象，但在全局作用域中可见。在全局作用域中赋值（不使用 `var`、`let` 或 `const`）也会被添加到 `window` 对象，但在严格模式下会抛出错误。
- **`window` 对象上的属性**：直接在 `window` 对象上定义属性，只是简单的属性赋值，不涉及变量声明。它们不会有提升行为，但会与全局变量共享同一个命名空间。

理解这些区别有助于编写更安全、更可靠的 JavaScript 代码，特别是在处理全局变量时。