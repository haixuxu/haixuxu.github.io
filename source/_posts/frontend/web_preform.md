---
title: web性能优化个人总结
date: 2017-05-20
---

## js编码:

  1.	使用虚拟dom操作,合并样式相关操作,减少浏览器repaint/reflow
  2.	减少dom的查找,$(".abc.ff"),缓存dom,记得清理，缓存溢出
  3.	对于频繁的对象属性查找，特别是原型链很长时,采用函数顶部变量声明，减少属		性查找的时间,同时可以减少压缩后的大小，这是采用一点空间换取时间的策略
  4.	使用jquery选择器查找dom时，使用优先级从高到低策略写出性能更好的表达式，selector越精确,尽量减少查找时间,防止不必要的性能损耗
  5.	不要过于频繁的绑定事件，尽量使用事件委托机制(原理是事件冒泡)
  6.	 延迟加载，代理缓存,减少不必要的请求
  7.	循环dom列表时，存储长度，减少查询长度的次数

## css编码:

  1.	使用外联样式，复用样式规则，不使用@import导入的形式
  2.	编写css样式时，去除无用的样式，样式规则尽量采用从优先级从高到低，selector越精确,减少规则渲染时间。
  3.	对于小图标，尽量使用字体文件，或减少图片文件，使用一张图片文件，使用background-position和background-sige偏移去显示某一个小图标

## http协议方面:

  1.	合并脚本文件，合并css文件，减少请求次数
  2.	使用浏览器缓存策略,策略依赖于http相应头. 
    -  客户端缓存:expires,cache-control:控制浏览器缓存文件过期时间，不再发送请求，过期废弃，重新发送请求
    - 服务端缓存:Last-Modified/If-Modified-Since,ETag/If-None-Match,服务器端记录并响应文件上次变更时间或变更计算出来的hash(etag)，客户端以后每次请求都带上该信息放入头部，让服务器作为对比依据,如果未发生变化，相应304状态码，相应不含有响应体，直接使用上一次的响应体，如发生变化,重新记录并响应文件上次变更时间或变更计算出来的hash(etag)
    - 调试技巧:chrome硬性重载，实是抛弃上次的响应头，带上了请求头:Cache-Control:no-cache(http 1.1),Pragma:no-cache (http1.0)
  3.	开启gzip压缩,减少传输数据的大小,需要选择合适的压缩比，过渡压缩会使得浏览器的解压缩时间过长.
  4.	增多域名提高并发,突破单个域名并发数量的限制
  5.	减少cookie的大小,不过于使用cookie

## 其他:

  1.	去除注释，压缩js,压缩css,减少传输文件大小
  2.	脚本放在body底部，防止脚本下载传输时页面无法渲染而出现的白屏等待，样式放在顶部head，防止页面出现后无样式时页面混乱到正常的闪烁
  3.	使用cdn加速策略,减少自身网站带宽压力
  4.	图片过多时使用js预载入
  5.	服务器域名解析DNS设置合理