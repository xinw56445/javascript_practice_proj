function canvas(id) {
    return document.getElementById(id);
}

const cars = ['BMW', 'Volvo', 'porsche', 'Ford'];

function demo() {
    /**
     * 初始化多个值
     */
    let i, len, text;
    for (i = 0, len = cars.length, text = ''; i < len; i++) {
        text += cars[i] + '<br>';
    }
    canvas('for_demo').innerHTML = text;
}

function demo1() {
    /**
     * 省略写法
     * @type {number}
     */
    let i = 0;
    let len = cars.length;
    let text = '';

    for (; i < len; i++) {
        text += cars[i] + '<br>';
    }
    canvas('for_demo1').innerHTML = text;
}

function demo2() {
    /**
     * 如果语句 2 返回 true，那么循环会重新开始，如果返回 false，则循环将结束。
     * @type {number}
     */
    let len = cars.length;
    let text = '';

    for (let i = 0; ; i++) {
        if (i === len) {
            break;
        }
        text += cars[i] + '<br>';
    }
    canvas('for_demo2').innerHTML = text;
}


function demo3() {
    let len = cars.length;
    let text = '';

    for (let i = 0; ;) {
        if (i === len) {
            break;
        }
        text += cars[i] + '<br>';
        i++;
    }
    canvas('for_demo3').innerHTML = text;
}

const person = {fname: "Bill", lname: "Gates", age: 62};

function demo4() {
    let text = "";
    let x;
    for (x in person) {  // 每次迭代返回一个key
        text += person[x] + " ";  // 通过key拿到对应的value
    }

    canvas('for_in_demo').innerHTML = text;
}

const fib = [1, 1, 2, 3, 5, 8, 13];

function demo5() {
    /**
     *  for in 数组遍历
     *  如果索引顺序很重要，就不要使用for in，可能不会按照期望顺序访问数值
     * @type {string}
     */
    let text = "";
    let x;
    for (x in fib) {
        text += fib[x] + ',';
    }
    canvas('for_in_demo1').innerHTML = text;
}

function demo6() {
    let text = '';
    let myFunction = function (value, index, array) {
        text += value + ',';
    };
    fib.forEach(myFunction);

    canvas('forEach_demo').innerHTML = text;

}

function demo7() {
    /**
     * for of
     * @type {string}
     */
    let text = '';
    let x;
    for (x of cars) {
        text += x + ',';
    }

    canvas('for_of_demo').innerHTML = text;
}

function demo8() {
    let str1 = 'JavaScript is a computer language';
    let text = '';
    for (const x of str1) {
        text += x + ',';
    }

    canvas('for_of_demo1').innerHTML = text;
}

function demo9() {
    let x = 0;
    let text = '';
    while (x < 10) {
        text += "数字是：" + x + '<br>';
        x++;  // 切记要加递增条件，不然就是死循环
    }

    canvas('while_demo').innerHTML = text;
}

function demo10() {
    let x = 0;
    let text = '';

    do {
        text += "数字是：" + x + "<br>";
        x++;
    } while (x < 10);

    canvas('do_while_demo').innerHTML = text;
}

function demo11() {
    let i = 0;
    let text = '';
    for (; i < cars.length;) {
        text += cars[i] + ', ';
        i++;
    }
    canvas('for_show').innerHTML = text;
}

demo11();

function demo12() {
    let i = 0;
    let text = '';
    while (cars[i]) {
        text += cars[i] + ', ';
        i++;
    }
    canvas('while_show').innerHTML = text;
}

demo12();

function demo13() {
    let x = 0;
    let text = '';
    for (; x < fib.length; x++) {
        if (fib[x] === 8){break;}
        text += fib[x] + ',';
    }
    canvas('break_demo').innerHTML = text;
}

function demo14() {
    let x = 0;
    let text = '';
    for (; x < fib.length; x++) {
        if (fib[x] === 5){continue;}
        text += fib[x] + ',';
    }
    canvas('continue_demo').innerHTML = text;
}