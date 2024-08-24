document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("pre code").forEach((block) => {
    // 创建复制按钮
    const button = document.createElement("button");
    button.innerText = "Copy";
    button.className = "copy-button";
    block.parentNode.insertBefore(button, block);

    // 使用 Clipboard.js 实现复制功能
    const clipboard = new ClipboardJS(button, {
      target: () => block,
    });

    clipboard.on("success", (e) => {
      button.innerText = "Copied!";
      setTimeout(() => {
        button.innerText = "Copy";
      }, 2000);
    });

    clipboard.on("error", (e) => {
      button.innerText = "Failed!";
      setTimeout(() => {
        button.innerText = "Copy";
      }, 2000);
    });
  });
});
