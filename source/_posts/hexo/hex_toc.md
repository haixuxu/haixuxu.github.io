---
title:  Hexo博客中实现文章导航
date: 2024-08-26
---

如果你想在 Hexo 博客中手动实现目录（Table of Contents, TOC），可以通过编写自定义的 JavaScript 脚本和修改主题模板来实现。以下是一个详细的步骤指南：

### 步骤 1: 修改主题模板

首先，我们需要在主题模板中添加一个用于放置目录的占位符。假设你使用的是 `next` 主题，可以在 `/themes/next/layout/_custom/post.swig` 文件中添加目录容器（如果没有这个文件，可以新建它）。

在适当的位置（例如文章内容开头），添加一个 `div` 容器来放置目录：

```html
<div id="toc-container"></div>
```

### 步骤 2: 编写生成目录的 JavaScript 脚本

在主题的 `source/js` 目录下创建一个新的 JavaScript 文件（例如 `toc.js`），并添加以下代码：

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // 获取文章内容中的所有标题元素
  const content = document.querySelector('.post-body');
  const headers = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  if (headers.length === 0) return;

  // 创建目录的容器
  const tocContainer = document.getElementById('toc-container');
  const tocList = document.createElement('ul');
  tocContainer.appendChild(tocList);

  // 生成目录
  headers.forEach(header => {
    const level = parseInt(header.tagName[1]);
    const listItem = document.createElement('li');
    listItem.className = 'toc-level-' + level;
    
    const link = document.createElement('a');
    link.href = '#' + header.id;
    link.textContent = header.textContent;
    
    listItem.appendChild(link);
    tocList.appendChild(listItem);
    
    // 为每个标题添加一个 ID 以便链接跳转
    if (!header.id) {
      header.id = 'toc-' + header.textContent.toLowerCase().replace(/\s+/g, '-');
    }
  });
});
```

### 步骤 3: 在主题模板中引入 JavaScript 脚本

在主题的 `/themes/next/layout/_custom/head.swig` 文件中引入刚才创建的 JavaScript 文件：

```html
<script src="/js/toc.js"></script>
```

### 步骤 4: 添加样式

为了让目录看起来更美观，你可以为目录添加一些基本的样式。在主题的 `source/css` 目录下创建一个新的 CSS 文件（例如 `toc.css`），并添加以下样式：

```css
#toc-container {
  position: relative;
  margin-bottom: 1em;
}

#toc-container ul {
  list-style: none;
  padding-left: 0;
}

#toc-container li {
  margin-left: 1em;
}

.toc-level-1 a { font-weight: bold; }
.toc-level-2 a { font-weight: normal; }
.toc-level-3 a { font-weight: lighter; }
/* 根据需要继续为更深层级的标题设置样式 */
```

在主题的 `/themes/next/layout/_custom/head.swig` 文件中引入刚才创建的 CSS 文件：

```html
<link rel="stylesheet" href="/css/toc.css">
```

### 步骤 5: 确保文章标题有唯一的 ID

在你的 Markdown 文件中，确保每个标题都有唯一的 ID。你可以手动添加 ID，或者使用一些工具自动生成。

例如：

```markdown
# 介绍 {#intro}
## 小节 {#section}
```

或者在生成目录的脚本中自动生成 ID（如上述 JavaScript 代码中所示）。

### 总结

上述步骤详细描述了如何通过修改 Hexo 主题模板、编写 JavaScript 脚本和添加样式来手动实现 TOC。如果你对 JavaScript 和 HTML/CSS 有一定的了解，这种方法可以让你完全自定义目录的样式和行为。

