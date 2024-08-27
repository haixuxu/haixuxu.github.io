---
title: 生成器模式-Builder
date: 2024-08-27
---

生成器模式（Builder Pattern）是一种创建型设计模式，它允许您一步一步构建复杂对象。此外，它还允许您使用相同的构建过程创建不同的表示。生成器模式特别适用于构建那些包含多个部分的复杂对象。

在 JavaScript 中，生成器模式可以通过类或函数来实现。以下是几种常见的实现方法。

### 方法一：使用类和链式调用

这是生成器模式的典型实现方法，通过链式调用来一步步构建对象。

```javascript
class Car {
  constructor() {
    this.make = '';
    this.model = '';
    this.year = 0;
    this.color = '';
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setMake(make) {
    this.car.make = make;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  build() {
    return this.car;
  }
}

const car = new CarBuilder()
  .setMake('Toyota')
  .setModel('Corolla')
  .setYear(2020)
  .setColor('Red')
  .build();

console.log(car); // Car { make: 'Toyota', model: 'Corolla', year: 2020, color: 'Red' }
```

### 方法二：使用函数和闭包

可以使用函数和闭包来实现生成器模式，这种方法更加简洁。

```javascript
function CarBuilder() {
  const car = {
    make: '',
    model: '',
    year: 0,
    color: ''
  };

  return {
    setMake(make) {
      car.make = make;
      return this;
    },
    setModel(model) {
      car.model = model;
      return this;
    },
    setYear(year) {
      car.year = year;
      return this;
    },
    setColor(color) {
      car.color = color;
      return this;
    },
    build() {
      return car;
    }
  };
}

const car = CarBuilder()
  .setMake('Toyota')
  .setModel('Corolla')
  .setYear(2020)
  .setColor('Red')
  .build();

console.log(car); // { make: 'Toyota', model: 'Corolla', year: 2020, color: 'Red' }
```

### 方法三：使用 ES6 类和静态方法

这是使用 ES6 类和静态方法的一种实现方式，可以使代码更结构化。

```javascript
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  static Builder = class {
    constructor() {
      this.make = '';
      this.model = '';
      this.year = 0;
      this.color = '';
    }

    setMake(make) {
      this.make = make;
      return this;
    }

    setModel(model) {
      this.model = model;
      return this;
    }

    setYear(year) {
      this.year = year;
      return this;
    }

    setColor(color) {
      this.color = color;
      return this;
    }

    build() {
      return new Car(this.make, this.model, this.year, this.color);
    }
  }
}

const car = new Car.Builder()
  .setMake('Toyota')
  .setModel('Corolla')
  .setYear(2020)
  .setColor('Red')
  .build();

console.log(car); // Car { make: 'Toyota', model: 'Corolla', year: 2020, color: 'Red' }
```

### 方法四：使用工厂与生成器结合

在某些情况下，生成器模式和工厂模式可以结合使用，以实现更复杂的对象创建。

```javascript
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

class CarBuilder {
  constructor() {
    this.make = '';
    this.model = '';
    this.year = 0;
    this.color = '';
  }

  setMake(make) {
    this.make = make;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  build() {
    return new Car(this.make, this.model, this.year, this.color);
  }
}

class VehicleFactory {
  static createCar() {
    return new CarBuilder();
  }
}

const car = VehicleFactory.createCar()
  .setMake('Toyota')
  .setModel('Corolla')
  .setYear(2020)
  .setColor('Red')
  .build();

console.log(car); // Car { make: 'Toyota', model: 'Corolla', year: 2020, color: 'Red' }
```

这些示例展示了如何在 JavaScript 中实现生成器模式。生成器模式在需要逐步构建复杂对象时特别有用，并且允许通过链式调用使代码更加简洁和可读。