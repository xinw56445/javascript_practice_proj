function canvas(str) {
    return document.getElementById(str);
}

function demo() {
    // 数组的创建 声明可横跨多行
    let cars = [
        "Saab",
        "Volvo",
        "BMW"
    ];

    canvas("arr").innerHTML = typeof cars + " " + cars;

    // 使用 new 关键字创建 等效于上面的例子
    let car = new Array("Saab", "Volvo", "BMW");

    canvas("arr1").innerHTML = typeof car + " " + car;
}

demo();

function demo1() {

    let cars = [
        "Saab",
        "Volvo",
        "BMW"
    ];

    // 数组访问
    canvas('arr2').innerHTML = cars[0];

    // 数组修改
    cars[0] = "Opel";
    canvas('arr3').innerHTML = cars;
}

demo1();

function demo2() {
    {   // 数组
        let person = [
            "Bill",
            "Gates",
            "65"
        ]

        canvas("arr4").innerHTML = "数组 person[0] 返回 " + person[0];
    }

    {
        let person = {
            firstName: "Bill",
            lastName: "Gates",
            age: "65"
        }

        canvas("arr5").innerHTML = "对象 person[firstName] 返回 " + person["firstName"];
    }
}

demo2();

function demo3() {
    /**
     * 数组的length 属性
     */

    let fruits = ["Banana", "Orange", "Apple", "Mango"];

    canvas('arr_attribute').innerHTML =
        fruits.length + ", " +
        fruits[0] + ", " +
        fruits[fruits.length - 1]; // 长度是从1开始的，所以减一
}

demo3();

function demo4() {
    /**
     * 数组的遍历 for 循环
     */

    {
        let fruits, text, flen, i;

        fruits = ["Banana", "Orange", "Apple", "Mango"];
        flen = fruits.length;
        text = "<ul>";

        for (i = 0; i < flen; i++) {
            text += "<li>" + fruits[i] + "</li>";
        }

        canvas('arr_attribute1').innerHTML = text;
    }

    {
        // Array.foreach() 函数
        let fruits, text;

        fruits = ["Banana", "Orange", "Apple", "Mango"];
        text = "<ul>";

        let arr = function (valve) {
            text += '<li>' + valve + "</li>";
        }

        fruits.forEach(arr);
        text += "</ul>";

        canvas("arr_attribute2").innerHTML = text;
    }
}

demo4();

function demo5() {
    /**
     * 添加数组元素
     */
    let fruits = ["Banana", "Orange", "Apple", "Mango"];

    function new_fruits() {
        fruits.push("Lemon"); // 数组最后 加入元素
        canvas("arr_method").innerHTML = fruits;
    }

    new_fruits();
}

function demo6() {

    // length 添加 
    {
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits[fruits.length] = "Lemon"
        canvas("arr_attribute3").innerHTML = fruits;
    }
}

function demo7() {

    {
        let person = [];
        person[0] = "Bill";
        person[1] = "Gates";
        person[2] = 62;

        canvas("arr_demo").innerHTML = person.length + ", " + person[0];
    }

    {   // 这样以命名为索引的方式不支持
        let person = [];
        person["firstName"] = "Bill";
        person["lastName"] = "Gates";
        person["age"] = 62;

        canvas("arr_demo1").innerHTML = person.length + ", " + person[0];
    }
}

demo7();

var fruits = [
    "Banana",
    "Orange",
    "Apple",
    "Mango"
];

function demo8() {
    /**
     *  判断是否为数组
     */

    // 方式一: Es自带的Array.isArra()
    if (Array.isArray(fruits)) {
        return canvas("arr_method1").innerHTML = true;
    }
}

function demo9() {
    // 方式二: 自定义方法
    let isArray = function (x) {
        // constructor 属性返回所有 JavaScript 变量的构造函数。
        return x.constructor.toString().indexOf("Array") > -1;
    }

    canvas('arr_demo2').innerHTML = "fruits[] 是数组吗: " + isArray(fruits);
}

function demo10() {
    // 方式三: instanceof 属性
    let isArray = function (x) {
        return x instanceof Array;
    }

    canvas('arr_attribute4').innerHTML = "fruits[] 是数组吗: " + isArray(fruits);
}

function demo11() {
    // toString() 把数组转换为数组值的字符串
    canvas('arr_method2').innerHTML = "fruits: " + typeof fruits + "<br>" +
        "toString() 转换后: " + typeof fruits.toString();
}

function demo12() {
    /**
     * join() 将数组元素结合为一个字符串,可以规定分隔符
     */
    canvas('arr_method3').innerHTML = "fruits: " + typeof fruits + "<br>" +
        "join() 转换后: " + typeof fruits.join() + "<br>" +
        "join('*') 连接后: " + fruits.join("*");
}

function demo13() {
    /**
     * pop() 方法从数组中删除最后一个元素，
     * 返回“被弹出”的值：
     */

    canvas("arr_method4").innerHTML = "删除最后一个元素: " + fruits.pop() + "<br>" +
        "最终数组为: " + fruits;
}

function demo14() {
    /**
     * shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引
     * shift() 方法返回被“位移出”的字符串：
     */

    canvas("arr_method5").innerHTML = "删除首个元素: " + fruits.shift() + "<br>" +
        "最终数组为: " + fruits;
}

function demo15() {
    /**
     * unshift() 方法（在开头）向数组添加新元素，并“反向位移”旧元素
     * unshift() 方法返回新数组的长度。
     */
    fruits.unshift("Peach");
    canvas("arr_method6").innerHTML = "在数组开头添加: " + fruits;
}

function demo16() {
    /**
     * delete 运算符 删除元素,但不影响数组长度，会留下为定义的空洞
     */
    delete fruits[1]
    canvas("arr_method7").innerHTML = "删除 fruits 第二个元素，则fruits：" + fruits + "<br>" +
        "fruits[1]: " + fruits[1];
}


var INPUT_ADD_INDEX_VALUE;
var INPUT_ADD_INDEX = document.getElementById("uname");

var INPUT_DEL_NUM = document.getElementById("del_num");
var INPUT_DEL_NUM_VALUE;

function input_method() {
    // 输入方法

    if (INPUT_ADD_INDEX.value == "") {
        INPUT_ADD_INDEX_VALUE = "未指定值";
    } else {
        INPUT_ADD_INDEX_VALUE = Number(INPUT_ADD_INDEX.value);
    }

    if (INPUT_DEL_NUM.value == "") {
        INPUT_DEL_NUM_VALUE = "未指定值";
    } else {
        INPUT_DEL_NUM_VALUE = Number(INPUT_DEL_NUM.value);
    }
    // console.log(INPUT_ADD_INDEX.value, INPUT_DEL_NUM.value);
    confirm(
        "输入的添加位置是: " + INPUT_ADD_INDEX_VALUE + '\n' +
        "定义删除元素数量: " + INPUT_DEL_NUM_VALUE + '\n' +
        "请确认！"
    );
}

function demo17() {
    /**
     * splice(add_index, del_num, "add_elem") 方法可用于向数组添加（或者替换）新项
     *
     * @param {*} add_index 定义了应添加新元素的位置（拼接）
     * @param {*} del_num 定义应删除多少元素。
     * @param {*} add_elem 定义添加元素。
     * @returns splice() 方法返回一个包含已删除项的数组：
     */


    if ((INPUT_ADD_INDEX.value && INPUT_ADD_INDEX.value) != '') {
        if (Number(INPUT_ADD_INDEX.value) || Number(INPUT_DEL_NUM.value)) {
            fruits.splice(INPUT_ADD_INDEX.value, INPUT_DEL_NUM.value, "Lemon", "Kiwi");
        } else {
            confirm("输入的参数非数值" + '\n' + "请确认！");
        }
    } else {
        confirm("未输入参数" + '\n' + "请确认！");
    }

    canvas("arr_method8").innerHTML = "新数组: " + "[" + fruits.join(", ") + "]";
}

function demo18() {
    /**
     * 使用splice() 来删除指定位置的元素
     * @param {*} arr
     * @param {*} del_index
     * @param {*} del_num
     * @returns
     */
    let splice = function (arr, del_index, del_num) {
        return arr.splice(del_index, del_num);
    };
    // 找到待删除的元素索引，指定删除的数量（数量大于1 则按照索引递增删除）
    splice(fruits, 1, 1);

    canvas("arr_method9").innerHTML = fruits;
}

function demo19() {
    /**
     * concat() 方法不会更改现有数组。它总是返回一个新数组。
     * concat() 方法可以使用任意数量的数组参数
     */
    let arr1 = ["Cecilie", "Lone"];
    let arr2 = ["Emil", "Tobias", "Linus"];
    let arr3 = ["Robin", "Morgan"];

    // 多数组合并
    let myFriends = arr1.concat(arr2, arr3);
    canvas("arr_method10").innerHTML = "连接后的新数组为: " + myFriends;
    // 直接传数组
    let arr4 = arr1.concat(["a", "b"]);
    canvas("arr_method11").innerHTML = "连接后的新数组为: " + arr4;
}

function demo20() {
    /**
     * slice() 方法用数组的某个片段切出新数组。
     * @param {*} start_index 开始索引
     * @param {*} end_index 结束索引
     * @returns
     */
    let slice = function (arr, start_index, end_index) {
        return arr.slice(start_index, end_index);
    }
    let newArr = slice(fruits, 1, 3);
    canvas("arr_method12").innerHTML = "新数组: " + newArr;
}

function demo21() {
    /**
     * sort() 方法以字母顺序对数组进行排序：
     * @param {*} arr
     * @returns
     */
    let sort = function (arr) {
        return arr.sort();
    }
    sort(fruits);
    canvas("arr_method13").innerHTML = "排序后: " + fruits;
}

function demo22() {
    /**
     * reverse() 方法反转数组中的元素
     * @param {*} arr
     * @returns
     */
    let reverse = function (arr) {
        return arr.reverse();
    }
    // 升序排序
    let arr1 = fruits.sort();
    // 反转数组
    let arr2 = reverse(arr1);

    canvas("arr_method14").innerHTML = "反转后: " + arr2;
}

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("arr_method15").innerHTML = points;

function demo23() {
    // 比值函数 升序排序
    // 数值数组两两比较，function(40, 100){return 40 - 100}
    // 以上计算结果是 负，按照sort() 则a排在b前面
    points.sort(function (a, b) {
        return a - b
    });
    canvas("arr_method15").innerHTML = points;
}

function demo24() {
    // 比值函数 降序排序
    points.sort(function (a, b) {
        return b - a
    });
    canvas("arr_method16").innerHTML = points;
}

function demo25() {
    // 使用sort() 对数值数组直接排序
    points.sort();
    canvas("arr_method17").innerHTML = points;
}

function demo26() {
    /**
     * Math.random() 返回 0～1之间的随机浮点数
     *
     * 找一个中间数 0.5 和每次两两对比时生成的随机数进行运算对比，
     * 按照升序规则，小的数排在前面
     */
    // 使用 Math.rondom() 随机排列
    points.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    canvas("arr_method18").innerHTML = points;
}

function demo27() {
    /**
     * 使用 Math.max.apply 来查找数组中的最高值
     * @param {*} arr
     */
    let myArrayMax = function (arr) {
        return Math.max.apply(null, arr);
    };
    let max = myArrayMax(points);
    canvas("arr_method19").innerHTML = "最大值: " + max;
}

function demo28() {
    /**
     * 使用 Math.min.apply 来查找数组中的最低值
     * @param {*} arr
     */
    let myArrayMin = function (arr) {
        return Math.min.apply(null, arr);
    };
    let min = myArrayMin(points);
    canvas("arr_method20").innerHTML = "最小值: " + min;
}

function demo29() {
    /**
     * 自定义方法
     * @param {*} arr
     * @returns
     */
    let myArrayMax = function (arr) {
        let len = arr.length;
        let max = -Infinity; // 这里必须定义数字的最小数

        while (len--) {
            if (arr[len] > max) {
                max = arr[len];
                console.log(max);
            }
        }
        return max;
    };

    canvas("arr_method21").innerHTML = "最大值: " + myArrayMax(points);
}

var cars = [
    {type: "Volvo", year: 2016},
    {type: "Saab", year: 2001},
    {type: "BMW", year: 2010},
    {type: "Audi", year: 2013},
    {type: "Porsche", year: 2004},
];

function cars_loop() {
    let text = "<ul>";
    // forEach()
    let arr = function (valve) {
        text += "<li>" + valve.type + ' ' + valve.year + "</li>";
    }
    cars.forEach(arr);

    text += "<ul>";
    canvas("arr_method22").innerHTML = "排序前: " + text;
}

cars_loop();

function demo30() {
    cars.sort(function (a, b) {
        return a.year - b.year
    });

    let text = "<ul>";
    // for 循环
    for (let index = 0; index < cars.length; index++) {
        text += "<li>" + cars[index].type + ' ' + cars[index].year + "</li>";
    }

    text += "<ul>";
    canvas('arr_method22').innerHTML = "排序后: " + text;
}

function demo31() {
    cars.sort(function (a, b) {
        const x = a.type.toLowerCase();
        const y = b.type.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    let text = "<ul>";
    // for 循环
    for (let index = 0; index < cars.length; index++) {
        text += "<li>" + cars[index].type + ' ' + cars[index].year + "</li>";
    }

    text += "<ul>";
    canvas('arr_method23').innerHTML = "排序后: " + text;
}

function maopao_rise() {
    // 冒泡排序points 升序
    for (let i = 1; i < points.length; i++) {
        for (let j = 0; j < points.length - i; j++) {
            if (points[j] > points[j + 1]) {
                let temp = points[j];
                points[j] = points[j + 1];
                points[j + 1] = temp;
            }
        }
    }
    return points;
}

canvas("arr_method24").innerHTML = "排序后: " + maopao_rise();

function maopao_drop() {
    // 冒泡排序points 降序
    for (let i = 1; i < points.length; i++) {
        for (let j = 0; j < points.length - i; j++) {
            if (points[j] < points[j + 1]) {
                let temp = points[j + 1];
                points[j + 1] = points[j];
                points[j] = temp;
            }
        }
    }
    return points;
}

canvas("arr_method25").innerHTML = "排序后: " + maopao_drop();

var numbers = [45, 4, 9, 16, 25];

function demo32() {
    /**
     * 该函数接受 3 个参数：
     * 项目值 value
     * 项目索引 index
     * 数组本身 array
     */
    let txt = "";
    let myFunction = function (value, index, array) {
        txt = txt + value + ", ";
    }
    numbers.forEach(myFunction)
    canvas("arr_method26").innerHTML = txt;
}

function demo33() {
    /**
     *
     * @param {*} value 项目值
     * @param {*} index 项目索引
     * @param {*} array 数组本身
     */
    let myFunction = function (value, index, array) {
        return value * 2 + " ";
    }

    let numbers1 = numbers.map(myFunction);
    canvas('arr_method27').innerHTML = numbers1;
}

function demo34() {
    /**
     *
     * @param {*} value
     * @param {*} index
     * @param {*} array
     * @returns
     */
    let myFunction = function (value, index, array) {
        return value < 18;
    }

    let over18 = numbers.filter(myFunction);
    canvas('arr_method28').innerHTML = over18;
}

function demo35() {
    /**
     *
     * @param {*} total 总数（初始值/先前返回的值）
     * @param {*} value 项目值
     * @param {*} index 项目索引
     * @param {*} array 数组本身
     * @returns
     */
    let myFunction = function (total, value, index, array) {
        return total + value;
    }

    let sum = numbers.reduce(myFunction);
    canvas('arr_method29').innerHTML = sum;
}

function demo36() {
    /**
     *
     * @param {*} total
     * @param {*} value
     * @param {*} index
     * @param {*} array
     * @returns 符合条件的值
     */
    let myFunction = function (total, value, index, array) {
        return total + value;
    }

    let sum = numbers.reduceRight(myFunction);
    canvas('arr_method30').innerHTML = sum;
}

function demo37() {
    /**
     *
     * @param {*} value
     * @param {*} index
     * @param {*} array
     * @returns Ture or false
     */
    let myFunction = function (value, index, array) {
        return value > 18;
    }

    let allOver18 = numbers.every(myFunction);
    canvas('arr_method31').innerHTML = allOver18;
}

function demo38() {
    /**
     *
     * @param {*} valve
     * @param {*} index
     * @param {*} array
     * @returns Ture or false
     */
    let myFunction = function (valve, index, array) {
        return valve > 18;
    }

    let someOver18 = numbers.some(myFunction);
    canvas('arr_method32').innerHTML = someOver18;
}

function demo39() {
    /**
     * @param {*} valve
     * @param {*} index
     * @param {*} array
     * @returns value index 未找到项目则返回-1， 找到多项则返回第一个项目index
     */
    let fruits = ["Banana", "Orange", "Apple", "Mango"];

    let myFunction = function (value, index, array) {
        return value = 'Apple';
    }
    /*从开头开始检索*/
    let a = fruits.indexOf(myFunction());
    canvas("arr_method33").innerHTML = a;
}

function demo40() {
    /**
     * @param {*} valve
     * @param {*} index
     * @param {*} array
     * @returns value index 未找到项目则返回-1， 找到多项则返回第一个项目index
     */
    let fruits = ["Banana", "Orange", "Apple", "Mango"];

    let myFunction = function (value, index, array) {
        return value = 'Apple';
    }
    /*从结尾开始检索*/
    let a = fruits.lastIndexOf(myFunction());
    canvas("arr_method34").innerHTML = a;
}

function demo41() {
    /**
     *
     * @param value
     * @param index
     * @param array
     * @returns {boolean}
     */
    let myFunction = function (value, index, array) {
        return value > 10;
    }

    let first = numbers.find(myFunction);
    canvas("arr_method35").innerHTML = first;
}

function demo42() {
    /**
     *
     * @param value
     * @param index
     * @param array
     * @returns {boolean}
     */
    let myFunction = function (value, index, array) {
        return value > 18;
    }

    let first = numbers.findIndex(myFunction);
    canvas("arr_method36").innerHTML = first;
}

function demo43() {
    /**
     *
     * @type {string[]}
     */
    const colors = ["red", "blue", "black", "white", "Orange"];
    canvas("arr_obj").innerHTML = colors + '<br>' + typeof colors;
}

const colors = ["red", "blue", "black", "white", "Orange"];
document.getElementById('arr_obj01').innerHTML = colors;

function demo44() {
    /**
     *
     * @type {string[]}
     */
    const colors = ["red", "blue", "black", "white", "Orange"];
    colors[0] = 'yellow';
    canvas("arr_obj02").innerHTML = colors;
}