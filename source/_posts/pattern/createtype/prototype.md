---
title:  原型模式-Prototype
date: 2024-08-27
---

原型模式（Prototype Pattern）是一种创建型设计模式，它通过复制现有对象来创建新对象，而不是通过类实例化。JavaScript 本质上就是基于原型的语言，因此原型模式在 JavaScript 中非常自然。

以下是一些 JavaScript 中使用原型模式的示例：

### 方法一：使用 Object.create

`Object.create` 方法可以创建一个新对象，并将其原型设置为指定的对象。

```javascript
const personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// 创建一个新对象并继承 personPrototype
const person1 = Object.create(personPrototype);
person1.name = 'Alice';
person1.greet(); // Hello, my name is Alice

const person2 = Object.create(personPrototype);
person2.name = 'Bob';
person2.greet(); // Hello, my name is Bob
```

### 方法二：使用构造函数和原型

你可以使用构造函数来创建对象，并将方法定义在其原型上。

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Alice');
person1.greet(); // Hello, my name is Alice

const person2 = new Person('Bob');
person2.greet(); // Hello, my name is Bob
```

### 方法三：使用 ES6 类和原型

ES6 类语法是构造函数和原型模式的语法糖，本质上还是基于原型的。

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person('Alice');
person1.greet(); // Hello, my name is Alice

const person2 = new Person('Bob');
person2.greet(); // Hello, my name is Bob
```

### 方法四：克隆现有对象

你可以创建一个对象并通过浅拷贝或深拷贝来克隆它。

#### 浅拷贝

```javascript
const original = {
  name: 'Alice',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const clone = Object.assign({}, original);
clone.name = 'Bob';
clone.greet(); // Hello, my name is Bob
```

#### 深拷贝

使用 `JSON.parse` 和 `JSON.stringify` 进行深拷贝（注意：这种方法有局限性，不能处理函数和循环引用等）。

```javascript
const original = {
  name: 'Alice',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const clone = JSON.parse(JSON.stringify(original));
clone.name = 'Bob';
// clone.greet(); // 这行代码会报错，因为 `greet` 方法没有被复制
```

### 方法五：使用第三方库（如 Lodash）

如果需要更复杂的深拷贝，可以使用第三方库如 Lodash。

```javascript
const _ = require('lodash');

const original = {
  name: 'Alice',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const clone = _.cloneDeep(original);
clone.name = 'Bob';
clone.greet(); // Hello, my name is Bob
```

这些示例展示了如何在 JavaScript 中使用原型模式。JavaScript 的原型链机制为实现原型模式提供了强大的支持，使得对象的创建和方法共享变得非常高效和灵活。