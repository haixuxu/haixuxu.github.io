---
title: 如何替换文件中的unicode为对应的字符
date: 2024-09-05
---

### 方法一

编写`convertUnicodeCli.js`脚本转换

```js
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('请提供要转换的文件路径。');
  process.exit(1);
}

const inputFilePath = args[0];
const outputFilePath = args[1] || inputFilePath; // 如果没有提供输出文件路径，默认覆盖输入文件

// 检查文件是否存在
if (!fs.existsSync(inputFilePath)) {
  console.error(`文件不存在: ${inputFilePath}`);
  process.exit(1);
}

// 读取文件内容
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`读取文件失败: ${err}`);
    process.exit(1);
  }

  // 替换 Unicode 转义序列
  const result = data.replace(/\\u([\d\w]{4})/gi, (match, grp) => {
    return String.fromCharCode(parseInt(grp, 16));
  });

  // 写入转换后的内容
  fs.writeFile(outputFilePath, result, 'utf8', (err) => {
    if (err) {
      console.error(`写入文件失败: ${err}`);
      process.exit(1);
    }

    console.log(`转换成功: ${outputFilePath}`);
  });
});

```

使用

```bash
# test.js是输入文件，output.js是输出文件
node convertUnicodeCli.js test.js output.js
```