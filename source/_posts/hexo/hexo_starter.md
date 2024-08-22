---
title: Hexo搭建静态博客
date: 2024-08-21
---


Hexo 是一个快速、简单且功能强大的静态博客框架。它使用 Markdown（或其他渲染引擎）解析文章，生成静态文件，并且支持丰富的插件和主题。以下是使用 Hexo 搭建静态博客的详细步骤：

### 一、安装 Hexo

1. **安装 Node.js 和 npm**：
   确保你已经安装了 Node.js（Hexo 基于 Node.js）和 npm（Node.js 的包管理器）。

   你可以通过以下命令检查是否已经安装：

   ```bash
   node -v
   npm -v
   ```

   如果未安装，可以从 [Node.js 官网](https://nodejs.org/) 下载并安装。

2. **安装 Hexo**：
   使用 npm 全局安装 Hexo：

   ```bash
   npm install -g hexo-cli
   ```

### 二、创建新的 Hexo 项目

1. **初始化 Hexo 项目**：
   选择一个目录并初始化 Hexo 项目：

   ```bash
   hexo init my-blog
   cd my-blog
   npm install
   ```

2. **启动本地服务器**：
   初始化完成后，启动本地服务器查看博客效果：

   ```bash
   hexo server
   ```

   打开浏览器，访问 `http://localhost:4000`，你应该能看到一个默认的 Hexo 博客。

### 三、撰写博客文章

1. **创建新文章**：
   使用 Hexo 命令创建新文章：

   ```bash
   hexo new post "My First Post"
   ```

   这将会在 `source/_posts` 目录下生成一个名为 `My-First-Post.md` 的 Markdown 文件。

2. **编辑文章**：
   打开生成的 Markdown 文件，撰写你的文章。

### 四、生成静态文件

1. **生成静态文件**：
   当你完成文章撰写后，生成静态文件：

   ```bash
   hexo generate
   ```

   这会在 `public` 目录下生成所有静态文件。

2. **部署博客**：
   Hexo 支持多种部署方式，包括 GitHub Pages、SFTP、FTP 等。你可以在 `_config.yml` 文件中配置部署信息，然后使用以下命令进行部署：

   ```bash
   hexo deploy
   ```

   例如，如果你使用 GitHub Pages，可以在 `_config.yml` 中配置：

   ```yaml
   deploy:
     type: git
     repo: https://github.com/username/repo.git
     branch: gh-pages
   ```

   然后安装部署插件：

   ```bash
   npm install hexo-deployer-git --save
   ```

### 五、设置主题和插件

1. **安装主题**：
   Hexo 有很多主题可供选择，你可以在 [Hexo 主题列表](https://hexo.io/themes/) 中找到喜欢的主题。

   下载并安装主题，例如：

   ```bash
   git clone https://github.com/hexojs/hexo-theme-landscape themes/landscape
   ```

   修改 `_config.yml` 文件中的 `theme` 字段：

   ```yaml
   theme: landscape
   ```

2. **安装插件**：
   Hexo 社区提供了丰富的插件，你可以在 [Hexo 插件列表](https://hexo.io/plugins/) 中找到需要的插件。

   例如，安装分页插件：

   ```bash
   npm install hexo-generator-pagination --save
   ```

### 总结

通过以上步骤，你已经成功使用 Hexo 搭建了一个静态博客。你可以进一步自定义主题、添加插件、优化配置，以满足你的需求。Hexo 社区提供了丰富的资源和文档，可以帮助你更好地使用这个强大的静态博客框架。