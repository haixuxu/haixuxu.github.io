document.addEventListener("DOMContentLoaded", function() {
    // 获取文章内容中的所有标题元素
    const content = document.querySelector('.post-content');
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
  
  