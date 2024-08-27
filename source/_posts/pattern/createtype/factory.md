---
title:  工厂方法模式-Factory
date: 2024-08-27
---

工厂方法模式（Factory Method Pattern）是一种创建型设计模式，它定义了一个用于创建对象的接口，让子类决定实例化哪一个类。工厂方法使得一个类的实例化延迟到其子类。

在 JavaScript 中，工厂方法模式可以通过函数或类来实现。以下是几种常见的实现方法。

### 方法一：使用简单工厂函数

这是最简单的工厂方法实现，通过一个工厂函数来创建不同类型的对象。

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function Truck(make, model, year, payloadCapacity) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.payloadCapacity = payloadCapacity;
}

function VehicleFactory() {}

VehicleFactory.prototype.createVehicle = function(type, make, model, year, payloadCapacity) {
  if (type === 'car') {
    return new Car(make, model, year);
  } else if (type === 'truck') {
    return new Truck(make, model, year, payloadCapacity);
  }
};

const factory = new VehicleFactory();

const myCar = factory.createVehicle('car', 'Toyota', 'Corolla', 2020);
console.log(myCar); // Car { make: 'Toyota', model: 'Corolla', year: 2020 }

const myTruck = factory.createVehicle('truck', 'Ford', 'F-150', 2021, 3000);
console.log(myTruck); // Truck { make: 'Ford', model: 'F-150', year: 2021, payloadCapacity: 3000 }
```

### 方法二：使用 ES6 类和静态方法

使用 ES6 类可以更结构化地实现工厂方法模式。

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Truck {
  constructor(make, model, year, payloadCapacity) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.payloadCapacity = payloadCapacity;
  }
}

class VehicleFactory {
  static createVehicle(type, make, model, year, payloadCapacity) {
    switch (type) {
      case 'car':
        return new Car(make, model, year);
      case 'truck':
        return new Truck(make, model, year, payloadCapacity);
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}

const myCar = VehicleFactory.createVehicle('car', 'Toyota', 'Corolla', 2020);
console.log(myCar); // Car { make: 'Toyota', model: 'Corolla', year: 2020 }

const myTruck = VehicleFactory.createVehicle('truck', 'Ford', 'F-150', 2021, 3000);
console.log(myTruck); // Truck { make: 'Ford', model: 'F-150', year: 2021, payloadCapacity: 3000 }
```