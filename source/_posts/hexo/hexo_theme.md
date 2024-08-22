---
title: Hexo主题开发
date: 2024-08-23
---

创建一个极其简约、简单大方的 Hexo 主题涉及以下几个步骤：

1. **创建主题目录结构**
2. **编写主题配置文件**
3. **编写主题模板文件**
4. **应用主题**

以下是一个极其简约的主题示例：

### 一、创建主题目录结构

在你的 Hexo 项目目录下创建一个新的主题目录，例如 `simple`：

```bash
cd your-hexo-project
mkdir themes/simple
cd themes/simple
```

在 `simple` 目录下创建以下文件和目录结构：

```
simple
├── _config.yml
├── layout
│   ├── layout.ejs
│   ├── index.ejs
│   ├── post.ejs
├── source
│   └── css
│       └── style.css
```

### 二、编写主题配置文件

在 `themes/simple` 目录下创建 `_config.yml` 文件。这个文件可以包含主题的配置选项：

```yaml
# Example configuration
menu:
  Home: /
  Archives: /archives
```

### 三、编写主题模板文件

在 `themes/simple/layout` 目录下创建以下模板文件：

#### 1. `layout.ejs`

这是主布局文件，包含 HTML 结构和通用部分，比如头部和脚部：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title><%= config.title %></title>
  <link rel="stylesheet" href="<%= url_for('/css/style.css') %>">
</head>
<body>
  <header>
    <h1><a href="<%= config.url %>"><%= config.title %></a></h1>
    <nav>
      <% for (var name in theme.menu) { %>
        <a href="<%= url_for(theme.menu[name]) %>"><%= name %></a>
      <% } %>
    </nav>
  </header>
  <main>
    <%- body %>
  </main>
  <footer>
    <p>&copy; <%= new Date().getFullYear() %> <%= config.author %></p>
  </footer>
</body>
</html>

```

#### 2. `index.ejs`

这是主页模板文件，展示文章列表：

```html
<% page.posts.each(function(post) { %>
    <article>
      <h2><a href="<%= url_for(post.path) %>"><%= post.title %></a></h2>
      <p><%= post.date.format('YYYY-MM-DD') %></p>
      <div><%= post.excerpt %></div>
    </article>
  <% }); %>
```

#### 3. `post.ejs`

这是文章页面模板文件，展示文章内容：

```html
<article>
    <h2><%= page.title %></h2>
    <p><%= page.date.format('YYYY-MM-DD') %></p>
    <div class="post-content">
      <%- page.content %>
    </div>
  </article>
```

### 四、编写主题样式文件

在 `themes/simple/source/css` 目录下创建 `style.css` 文件，包含简单的样式：

```css
/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f9;
  color: #333;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background: #007acc;
  color: #fff;
  padding: 1.5rem 0;
  text-align: center;
  margin-bottom: 2rem;
}

header h1 {
  margin: 0;
  font-size: 2.5rem;
}

header nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

header nav a:hover {
  color: #ffeb3b;
}

main {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

article {
  background: #fff;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

article:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

article h2 {
  margin-bottom: 0.5rem;
  color: #007acc;
}

article h2 a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

article h2 a:hover {
  color: #ffeb3b;
}

article p {
  margin-bottom: 1rem;
}

footer {
  text-align: center;
  padding: 1.5rem 0;
  background: #007acc;
  color: #fff;
  margin-top: auto;
}

footer p {
  margin: 0;
  font-size: 0.9rem;
}

/* Markdown content styles */
.post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6 {
  margin: 1.5rem 0 1rem;
  font-weight: bold;
  color: #333;
}

.post-content p {
  margin: 1rem 0;
}

.post-content a {
  color: #007acc;
  text-decoration: none;
  border-bottom: 1px solid #007acc;
  transition: color 0.3s ease, border-bottom-color 0.3s ease;
}

.post-content a:hover {
  color: #005f99;
  border-bottom-color: #005f99;
}

.post-content blockquote {
  margin: 1.5rem 0;
  padding: 0.5rem 1rem;
  background: #f4f4f9;
  border-left: 5px solid #007acc;
  color: #555;
}

.post-content code {
  background: #f4f4f9;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.post-content pre {
  background: #272822;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
}

.post-content ul, .post-content ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

.post-content ul li, .post-content ol li {
  margin-bottom: 0.5rem;
}

```

### 五、应用主题

在 Hexo 项目的根目录下，修改 `_config.yml` 文件，将 `theme` 设置为 `simple`：

```yaml
theme: simple
```

### 六、启动 Hexo 服务器

回到 Hexo 项目的根目录，启动服务器查看效果：

```bash
hexo server
``` 

打开浏览器，访问 `http://localhost:4000`，你将看到一个简约、简单大方的 Hexo 博客主题。 有点丑，后面再来优化😂.

通过上述步骤，你就可以创建一个极其简约的 Hexo 主题。你可以根据需要进一步自定义和扩展这个主题。