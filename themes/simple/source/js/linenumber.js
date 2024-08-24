document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
      addLineNumbers(block);
    });
  });

  function addLineNumbers(block) {
    const lines = block.innerHTML.split('\n');
    const numberedLines = lines.map((line, index) => {
      return `<tr><td class="hljs-ln-numbers">${index + 1}</td><td class="hljs-ln-code">${line}</td></tr>`;
    });
    block.innerHTML = `<table class="hljs-ln">${numberedLines.join('')}</table>`;
  }