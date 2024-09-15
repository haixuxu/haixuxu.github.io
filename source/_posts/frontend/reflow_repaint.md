---
title: repaint和reflow有什么区别
date: 2024/9/15
---

重绘（Repaint）和重排（Reflow）是浏览器渲染过程中两个不同的步骤，它们的区别在于所涉及的计算复杂度和对性能的影响。

### 重绘（Repaint）
重绘是指当元素的样式更改但不会影响其布局时，浏览器只需要重新绘制该元素及其子元素。这通常发生在改变元素的视觉样式属性时，例如颜色、背景、边框颜色或阴影等。重绘的计算相对简单，通常只涉及图形层面的更新。

**触发重绘的属性：**
- `color`
- `background`
- `visibility`
- `border-color`
- `text-decoration`
- `box-shadow`
- `outline`

**示例：**
```javascript
element.style.color = 'red';  // 只会触发重绘
element.style.backgroundColor = 'blue';  // 只会触发重绘
```

### 重排（Reflow）
重排是指当元素的几何属性（例如大小、位置）发生变化时，浏览器需要重新计算布局，从而更新页面的布局。这通常比重绘更消耗性能，因为它涉及更复杂的计算，可能会影响整个文档或文档的一部分。

**触发重排的属性和方法：**
- `width`, `height`
- `margin`, `padding`
- `border`
- `display`
- `position`
- `top`, `left`, `right`, `bottom`
- `font-size`
- 访问几何属性（`offsetWidth`, `clientHeight` 等）
- DOM 操作（`appendChild`, `removeChild` 等）

**示例：**
```javascript
element.style.width = '100px';  // 会触发重排
element.style.position = 'absolute';  // 会触发重排
const width = element.offsetWidth;  // 会触发重排
```

### 性能影响
- **重绘（Repaint）**：相对轻量级，只涉及图形层面的更新，不会影响布局。频繁的重绘通常不会严重影响性能，但在某些情况下（例如复杂的图形操作）也可能带来性能开销。
- **重排（Reflow）**：较为重量级，需要重新计算元素的几何属性，可能会影响整个文档或文档的一部分。频繁的重排会显著影响性能，特别是在复杂布局或大量 DOM 操作的情况下。

### 优化建议
为了优化浏览器的渲染性能，应该尽量减少重排和重绘的次数。以下是一些优化建议：

1. **批量更新 DOM**：将多次 DOM 操作合并在一次操作中完成。
2. **使用文档碎片**：在进行大量 DOM 操作时，使用 `DocumentFragment` 来减少重排次数。
3. **缓存布局信息**：避免在循环中多次访问会触发重排的属性，应该将其缓存起来。
4. **使用 CSS 变换**：使用 `transform` 和 `opacity` 进行动画和过渡，这些属性只会触发重绘，不会触发重排。
5. **减少回流区域**：尽量减少对整个文档的影响，限制重排的影响范围。

通过这些优化手段，可以有效降低重排和重绘的频率，从而提高页面的渲染性能。