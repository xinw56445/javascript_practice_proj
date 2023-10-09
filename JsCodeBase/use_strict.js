"use strict"; //定义 JavaScript 代码应该以“严格模式”执行，依然具有块作用域

function canvas(id) {
    return document.getElementById(id);
}

function demo() {
    /**
     * 无法使用未声明的变量。
     * @type {number}
     */
    x = 3.14;
    canvas('use_strict_demo').innerHTML = x;
}

function demo1() {
    /**
     * 函数内部使用严格模式，拥有局部作用域
     * @type {number}
     */
    x = 3.14;
    function f() {
        "use strict";
        y = 3.14;
    }
    f();
    canvas('use_strict_demo1').innerHTML = x + "" + y;
}

function demo2() {
    /**
     * 无法使用未声明的变量。
     * @type {number}
     */
    x = 3.14;
    canvas('use_strict_demo2').innerHTML = x;
}

function demo3() {
    /**
     * 无法使用未声明的对象
     * @type {number}
     */
    x = {p1:10, p2:20};
    canvas('use_strict_demo3').innerHTML = x;
}

function demo4() {
    /**
     * 删除变量或对象不可以
     * @type {number}
     */
    x = 3.14;
    delete x;
    canvas('use_strict_demo4').innerHTML = x;
}

function demo5() {
    /**
     * 删除函数不可以
     * @type {number}
     */
    function x(p1, p2) {

    };
    delete x(0, 0);
    canvas('use_strict_demo5').innerHTML = x;
}

function demo6() {
    /**
     * 重复参数不可以
     * @type {number}
     */
    function x(p1, p1) {

    };
    x(0, 0);
    canvas('use_strict_demo6').innerHTML = x;
}


function demo7() {
    /**
     * 八进制数值文本不行
     * @type {number}
     */
    var x = 010;
    canvas('use_strict_demo7').innerHTML = x;
}

function demo8() {
    /**
     * 转义字符是不允许的
     * @type {number}
     */
    var x = \010;
    canvas('use_strict_demo8').innerHTML = x;
}

function demo9() {
    /**
     * 写入只读属性是不允许的
     * @type {number}
     */
    var obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});
    obj.x = 3.14;
    canvas('use_strict_demo9').innerHTML = x;
}

function demo10() {
    /**
     * 写入只能获取的是不允许的
     * @type {number}
     */
    var obj = {get x() {return 0} };

    obj.x = 3.14;
    canvas('use_strict_demo10').innerHTML = x;
}

function demo11() {
    /**
     * 删除不可删除的的属性是不允许的
     * @type {number}
     */
    delete Object.prototype;
    canvas('use_strict_demo11').innerHTML = x;
}

function demo12() {
    /**
     * 字符串 "eval" 不可用作变量
     * @type {number}
     */
    var eval = 3.14;
    canvas('use_strict_demo12').innerHTML = x;
}
function demo13() {
    /**
     * 字符串 "arguments" 不可用作变量
     * @type {number}
     */
    var arguments = 3.14;
    canvas('use_strict_demo13').innerHTML = x;
}

function demo14() {
    /**
     * with 语句是不允许的
     * @type {number}
     */
    with (Math){x = cos(2)};
    canvas('use_strict_demo14').innerHTML = x;
}

function demo15() {
    /**
     * 不允许 eval() 在其被调用的作用域中创建变量
     * @type {number}
     */
    eval ("var x = 2");
    alert (x);
    canvas('use_strict_demo15').innerHTML = x;
}