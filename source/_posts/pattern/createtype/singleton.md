---
title: 单例模式-Singleton
date: 2024-08-27
---

在 JavaScript 中，单例模式（Singleton Pattern）确保一个类只有一个实例，并提供一个全局的访问点。有多种方式可以实现单例模式，以下是几种常见的实现方法：

### 方法一：使用闭包和立即执行函数表达式 (IIFE)

```javascript
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
```

### 方法二：使用 ES6 类和静态方法

```javascript
class Singleton {
  constructor() {
    // Initialize your properties here
    this.data = "I am the instance";
  }

  static getInstance() {
    if (this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}
```

### 方法三：通过模块模式

在使用模块系统（如 ES6 模块）时，可以利用模块的单例特性来实现单例模式。

```javascript
// singleton.js
let instance = null;

class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
      this.data = "I am the instance";
    }
    return instance;
  }

  getData() {
    return this.data;
  }
}

export default Singleton;

// main.js
import Singleton from "./singleton.js";

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getData()); // "I am the instance"
```

### 方法四：使用 Symbol 防止外部访问

可以使用 JavaScript 的 `Symbol` 来创建一个私有的标识符，从而防止外部直接创建实例。

```javascript
const Singleton = (function () {
  const instanceSymbol = Symbol("instance");

  class Singleton {
    constructor() {
      if (Singleton[instanceSymbol]) {
        return Singleton[instanceSymbol];
      }
      Singleton[instanceSymbol] = this;

      this.data = "I am the instance";
    }

    getData() {
      return this.data;
    }
  }

  return Singleton;
})();

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getData()); // "I am the instance"
```

### 方法五：使用 `Proxy` 代理

通过 `Proxy` 可以拦截对象的构建过程，确保只创建一个实例。

```javascript
const Singleton = (function () {
  let instance;

  class Singleton {
    constructor() {
      if (instance) {
        return instance;
      }
      instance = this;
      this.data = "I am the instance";
    }

    getData() {
      return this.data;
    }
  }

  return new Proxy(Singleton, {
    construct(target, args) {
      if (!instance) {
        instance = new target(...args);
      }
      return instance;
    },
  });
})();

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getData()); // "I am the instance"
```

这些示例展示了在 JavaScript 中如何实现单例模式。根据具体需求，可以选择最适合的实现方式。
