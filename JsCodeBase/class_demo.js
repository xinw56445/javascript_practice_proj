// "use strict";
const canvas = id => {
    return document.getElementById(id);
};

class Car {
    /**
     * 定义的Car类
     * @param name
     * @param year
     */
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const demo = () => {
    // 创建的myCar对象
    const myCar = new Car("BMW", 2009);
    canvas('class_demo').innerHTML = myCar.year + " " + myCar.name
}

class Car1 {
    /**
     * 定义的Car类
     * @param name
     * @param year
     */
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear();
    }
}

const demo1 = () => {
    const car1 = new Car1("Audi", 2016);
    canvas('class_method').innerHTML =
        "我的车是" + car1.name + ", 在" + car1.year + "年买的，车龄有" +
        (car1.age() - car1.year) + "年了";
};

class Model extends Car1 {
    /**
     *  定义Model类继承自Car1
     * @param name
     * @param year
     * @param color
     */
    constructor(name, year, color) {
        super(name, year);
        this.color = color;
    }

    carAge() {
        return this.age() - this.year;
    }
}

const demo2 = () => {
    const model = new Model("BMW", "2013", "Black");
    canvas("class_extends").innerHTML =
        "My Car is a " + model.color + " " + model.name + ", It was purchased in " + model.year +
        ". I've been driving for " + model.carAge() + " years now！"
};

class MyCar {
    /**
     * 类支持定义 getter 和 setter
     * 即使 getter 是一个方法，当你想要获取属性值时也不要使用括号。
     * @param brand
     */
    constructor(brand) {
        this.carname = brand;
    }

    get carName() {
        return this.carname;
    }

    set carName(name) {
        this.carname = name;
    }
}

const demo3 = () => {
    let myCar = new MyCar("Ford");
    myCar.carName = "Porsche";
    canvas("class_get").innerHTML = myCar.carName;
};

class Persons {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static hello() {
        return "this is a static Method！";
    }
}

const demo4 = () => {
    let person = new Persons("Bill", "Gates");
    canvas("static_method").innerHTML =
        person.firstName + " sayHello " + Person.hello();
}

class Person extends Persons{
    /**
     * 如果要在static方法使用类对象, 可以把类对象作为参数传到static 方法去
     * @param firstName
     * @param lastName
     */
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }

    static sayHi(name) {
        return name.firstName;
    }
}

const demo5 = () => {
    let person = new Person("Bill", "Gates");
    canvas("static_method1").innerHTML =
        "Hello " + Person.sayHi(person);
}
