var canvas = function (str) {
    return document.getElementById(str)
}
function demo() {

    let x = 3.14;  // 带小数点的数值
    let y = 3;  // 不带小数点的数值

    let x1 = 123e5; // 科学计数法 超大数
    let y1 = 123e-5;  // 科学计数法 超小数

    document.getElementById('demo').innerHTML =
        x + "<br>" + y + "<br>" + x1 + "<br>" + y1;
}

demo();

function demo1() {

    let value = `52 bits(0 - 51)`;
    let index = `11 bits(52 - 62)`;
    let symbol = `1 bits(63 - 64)`;

    let html = `<ul><li>值&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${value}</li>`;
    html += `<li>指数&nbsp;&nbsp;&nbsp;&nbsp;${index}</li>`;
    html += `<li>符号&nbsp;&nbsp;&nbsp;&nbsp;${symbol}</li></ul>`;

    document.getElementById('demo1').innerHTML = html;
}

demo1();

function demo2() {

    {
        let x = 999999999999999;  // 整数（不使用指数或科学计数法）会被精确到 15 位。
        let y = 9999999999999999;

        document.getElementById('demo2').innerHTML = x + "<br>" + y;
    }

    {
        let x = 0.2 + 0.1;
        let y = (0.2 * 10 + 0.1 * 10) / 10;

        document.getElementById('demo3').innerHTML = x + "<br>" + y;
    }

}

demo2();

function demo3() {

    { // 整数相加
        let x = 10;
        let y = 20;

        canvas('demo4').innerHTML = x + y;
    }

    { // 字符串相加
        let x = "10";
        let y = "20";

        canvas('demo5').innerHTML = x + y;
    }

    { // 数字和字符串相加。字符串和数字相加  
        let x = 10;
        let y = "20";

        canvas('demo6').innerHTML = x + y;
    }

    { // 字符串数字直接相加
        let x = 10;
        let y = 20;

        canvas("demo7").innerHTML = "结果是: " + x + y;
    }

    { // JavaScript 从左向右进行编译。
        let x = 10;
        let y = 20;
        let z = "30";

        canvas('demo8').innerHTML = x + y + z;
    }
}

demo3();

function demo4() {

    { // 除了“+”以外，都可以当做number类型去计算
        let x = "100";
        let y = "10";
        let z = x / y;

        canvas('demo9').innerHTML = typeof z + " " + z;
    }

    {
        let x = "100";
        let y = "10";
        let z = x * y;

        canvas('demo10').innerHTML = typeof z + " " + z;
    }
}

demo4();

function demo5() {

    {
        let x = 100;
        let y = "Apple";
        let z = x / y;

        canvas('demo11').innerHTML = isNaN(z) + " " + z;
    }

    {
        let x = 100;
        let y = "10";
        let z = x / y;

        canvas('demo12').innerHTML = isNaN(z) + " " + z;
    }

    {
        let x = NaN;
        let y = 5;
        let z = x + y;

        canvas('demo13').innerHTML = z;
    }

    { // NaN的类型是number 所以可以和字符串级联
        let x = NaN;
        let y = "5";
        let z = x + y;

        canvas('demo14').innerHTML = typeof x + " " + z;
    }
}

demo5();

function demo6() {

    {
        var myNumber = 2;
        var text = "";

        while (myNumber != Infinity) {
            myNumber = myNumber * myNumber;
            text = text + myNumber + "<br>";
        }

        canvas("demo15").innerHTML = text;
    }

    {
        let x = 2 / 0;
        let y = -2 / 0;

        canvas('demo16').innerHTML = x + " " + y;
    }
}

demo6();

function demo7() {

    {
        let x = 0xFF;

        canvas('demo17').innerHTML = "0xFF = " + x;
    }

    {
        var toString = function (number, num) {
            // num 把数输出为对应的进制数
            return number.toString(num);
        }
        var myNumber = 1314;
        canvas('demo18').innerHTML = toString(myNumber, 16);
    }
}

demo7();

function demo8() {

    {
        let x = 500;
        let y = new Number(500);  // 数值对象会拖慢执行速度
        let z = new Number(500);  // 对象之间无法比较

        canvas('demo19').innerHTML = "x == y: " + (x == y) + "<br>"
            + "y == z: " + (y == z); // 对象之间无法比较
    }
}

demo8();

function demo9() {
    /**
     * toString(num) 以字符串返回数值。
     * 
     * param: num: 进制单位
     * 所有 JavaScript 数据类型都有 valueOf() 和 toString() 方法。
     */

    {
        // 字符串返回数值
        var x = 123;
        canvas("method").innerHTML =
            x.toString() + "<br>" +  // 从变量x 返回123
            (123).toString() + "<br>" +  // 从文本123 返回123
            (100 + 23).toString();  // 从表达式 返回123
    }

    {
        // 进制转换
        var myNumber = 32;
        document.getElementById("method1").innerHTML =
            "32 = " + "<br>" +
            " Decimal " + myNumber.toString(10) + "<br>" +
            " Hexadecimal " + myNumber.toString(16) + "<br>" +
            " Octal " + myNumber.toString(8) + "<br>" +
            " Binary " + myNumber.toString(2);
    }
}

demo9();

function demo10() {
    /**
     * toExponentia(num) 返回字符串值，它包含已被四舍五入并使用指数计数法的数字。
     * 
     * param: num: 四舍五入保留位
     */

    {
        let toExponential = function (number, num) {
            // 参数定义小数点后的字符数
            str_ = number.toExponential(num);
            // 截掉 e+0
            return str_.slice(0, -3);
        }

        var x = 9.656;
        canvas('method2').innerHTML = toExponential(x, 2) + "<br>" +
            toExponential(x, 4) + "<br>";
    }
}

demo10();

function demo11() {
    /**
     * toFixed(num) 返回字符串值，它包含了指定位数小数的数字
     * 
     * param: num: 返回位数的指数（四舍五入）
     */

    {
        let toFixed = function (number, num) {
            return number.toFixed(num);
        }

        var x = 9.656;
        canvas('method3').innerHTML = toFixed(x, 0) + "<br>" +
            toFixed(x, 2) + "<br>" +
            toFixed(x, 4) + "<br>" +
            toFixed(x, 6);
    }
}

demo11();

function demo12() {
    /**
     * toPrecision(length) 返回字符串值，他包含了指定长度的数字
     * 
     * param: length: 长度
     */

    {
        var x = 9.656;

        canvas('method4').innerHTML = x.toPrecision() + "<br>" +
            x.toPrecision(2) + "<br>" +
            x.toPrecision(4) + "<br>" +
            x.toPrecision(6);
    }
}

demo12();

function demo13() {
    /**
     * valueOf() 以数值返回数值
     * 
     * 所有 JavaScript 数据类型都有 valueOf() 和 toString() 方法。
     */

    {
        let x = 123;

        canvas('method5').innerHTML = x.valueOf() + "<br>" +  //从变量返回123
            (123).valueOf() + "<br>" +  // 从文本返回123
            (100 + 23).valueOf();  // 从表达式返回123
    }
}

demo13();

function demo14() {
    /**
     * Number() 可用于把 JavaScript 变量转换为数值
     * 
     * @param {*} obj : js变量
     * @returns 
     */
    let myNumber = function (obj) {

        if (obj == true) {
            return Number(obj);
        } else if (obj == false) {
            return Number(obj);
        } else if (typeof (obj) == 'object') {
            return Number(obj);
        } else if (obj == "10") {
            return Number(obj);
        } else if (obj == "10 20") {
            return Number(obj)
        }
    }

    canvas('method6').innerHTML = "Number(true) = " + myNumber(true) + "<br>" +
        "Number(false) = " + myNumber(false) + "<br>" +
        "Number(new Date()) = " + myNumber(new Date()) + "<br>" +
        "Number('10') = " + myNumber("10") + "<br>" +
        "Number('10 20') = " + myNumber("10 20") + "<br>" +
        "Number(new Date('2019-04-15')) = " + Number(new Date("2019-04-15"));  // Number() 还可以把日期转换为数字：
}

demo14();

function demo15() {
    /**
     * parseInt() 解析一段字符串并返回数值。允许空格。只返回首个数字(int型)
     * 
     * @param {*} obj:  js变量
     * @returns 
     */
    let p = function (obj) {
        return parseInt(obj);
    };

    canvas('method7').innerHTML = "parseInt('10') = " + p("10") + "<br>" +
        "parseInt('10.33') = " + p("10.33") + "<br>" +
        "parseInt('10 20 30') = " + p("10 20 30") + "<br>" +
        "parseInt('10 years') = " + p("10 years") + "<br>" +
        "parseInt('years 10') = " + p("years 10");
}

demo15();

function demo16() {
    /**
     * parseFloat() 解析一段字符串并返回数值。允许空格。只返回首个数字：
     * 
     * @param {*} obj 
     * @returns 
     */
    let p = function (obj) {
        return parseFloat(obj);
    };

    canvas('method8').innerHTML = "parseFloat('10') = " + p("10") + "<br>" +
        "parseFloat('10.33') = " + p("10.33") + "<br>" +
        "parseFloat('10 20 30') = " + p("10 20 30") + "<br>" +
        "parseFloat('10 years') = " + p("10 years") + "<br>" +
        "parseFloat('years 10') = " + p("years 10");
}

demo16();

function demo17() {

    let max = Number.MAX_VALUE;
    let min = Number.MIN_VALUE;

    canvas('attr').innerHTML =
        "MAX_VALUE 返回JavaScript中可能最大的数字" + max + "<br>" +
        "MAX_VALUE 返回JavaScript中可能最大的数字" + min;
}

demo17();

function demo18(){
    // 正有限性
    let positive = Number.POSITIVE_INFINITY;  
    
    // 溢出时返回 POSITIVE_INFINITY
    let x = 1 / 0;
    
    canvas('attr1').innerHTML = positive + "<br>" + 
        x;
}

demo18();

function demo19 (){
    // 负有限性
    let negative = Number.NEGATIVE_INFINITY;

    // 溢出时返回 NEGATIVE_INFINITY
    let x = -1 / 0;

    canvas('attr2').innerHTML = negative + "<br>" + x;
}

demo19();

function demo20() {
    // 非数字
    let nan = Number.NaN;

    let x = 100 / "apple";
    canvas('attr3').innerHTML = nan + "<br>" + x;
}

demo20();