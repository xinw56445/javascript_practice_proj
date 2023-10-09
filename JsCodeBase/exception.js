"use strict"; //定义 JavaScript 代码应该以“严格模式”执行，依然具有块作用域
// 严禁未申明变量引用
function canvas(id) {
    return document.getElementById(id);
}

function demo() {
    try {
        adddlert('欢迎访问！');
    } catch (err) {
        canvas('err_demo').innerHTML = err.message;
    }
}

function myFunction() {
    let message, x;
    message = canvas('message');
    message.innerHTML = "";
    x = document.getElementById('demo').value;
    try {
        if (x == "") throw "空的";
        if (isNaN(x)) throw "不是数字";
        x = Number(x);
        if (x < 5) throw "太小";
        if (x > 10) throw "太大";
    } catch (err) {
        message.innerHTML = "输入是 " + err;
    }
}

function myFunction1() {
    let message1, x;
    message1 = canvas('message1');
    message1.innerHTML = "";
    x = document.getElementById('demo1').value;
    try {
        if (x == "") throw "空的";
        if (isNaN(x)) throw "不是数字";
        x = Number(x);
        if (x < 5) throw "太小";
        if (x > 10) throw "太大";
    } catch (err) {
        message1.innerHTML = "输入是 " + err;
    } finally {
        document.getElementById('demo1').innerHTML = "";
    }
}

function demo1() {
    /**
     * RangeError 超出合法范围
     * @type {number}
     */
    let x = 1;
    try {
        x.toPrecision(500); // 保留从左到右返回的位数，返回类型string
    } catch (err) {
        canvas('demo_RangeError').innerHTML = err.name;
    }

}

function demo2() {
    /**
     * ReferenceError 引用异常
     */
    let x;
    try {
        x = y + 1;
    } catch (err) {
        canvas('demo_ReferenceError').innerHTML = err.name;
    }
}

function demo3() {
    /**
     * SyntaxError 语法异常
     */
    try {
        eval("alert('Hello)");
    } catch (err) {
        canvas('demo_SyntaxError').innerHTML = err.name;
    }
}

function demo4() {
    /**
     * TypeError 类型错误
     * @type {number}
     */
    let num = 1;
    try {
        num.toUpperCase();
    } catch (err) {
        canvas('demo_TypeError').innerHTML = err.name;
    }
}

function demo5() {
    /**
     * URLError
     */
    try {
        decodeURI("%%%"); // decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码
    } catch (err) {
        canvas("demo_URLError").innerHTML = err.name;
    }

}








