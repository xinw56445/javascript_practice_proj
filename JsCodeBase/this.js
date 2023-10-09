// "use strict";
function canvas(id) {
    return document.getElementById(id);
}

function demo() {
    /**
     * this 指的是person对象
     * @type {{firstName: string, lastName: string, fullName: (function(): string), id: number}}
     */
    let person = {
      firstName: "Bill",
      lastName : "Gates",
      id       : 678,
      fullName : function () {
          return this.firstName + " " + this.lastName;
      }
    };
    let myName = person.fullName();
    canvas('this_demo').innerHTML = myName;
}

function demo1() {
    /**
     * 如果单独使用，那么 this 指的是全局对象 [object Window]
     * 在严格模式中使用，x则为undefined
     * @type {demo1}
     */
    // "use strict";
    let x = this;
    canvas('this_demo1').innerHTML = x;
}

function demo2() {
    /**
     * 在函数中，this 指的是全局对象 [object Window]
     * 在严格模式下，this 是未定义的（undefined）
     * @type {*}
     */
    canvas('this_demo2').innerHTML = myfunction();
    function myfunction() {
        return this;
    }
}

function demo3() {
    /**
     * this 是 person 对象（person 对象是该函数的“拥有者”）
     */
    let person = {
        firstName: "Bill",
        lastName : "Gates",
        id       : 678,
        fullName : function () {
            return this;
        }
    };
    canvas('this_demo3').innerHTML = person.fullName();
}

function demo4() {
    /**
     * 当使用 person2 作为参数调用 person1.fullName 时，this 将引用 person2，即使它是 person1 的方法
     * @type {{fullName: (function(): string)}}
     */
    let person1 = {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };

    let person2 = {
        firstName: "Bill",
        lastName : "Gates",
    };

    canvas('this_demo4').innerHTML = person1.fullName.call(person2);
}