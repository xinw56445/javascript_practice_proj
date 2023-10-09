function canvas(id_name) {
    return document.getElementById(id_name)
}

function demo() {
    /**
     * 数学方法 圆周率
     * @returns {number}
     */
    let pi = function () {
        return Math.PI;
    }
    canvas('math_method').innerHTML = pi();
}

function demo1() {
    /**
     *
     * @param x
     * @returns {number} x 四舍五入的结果
     */
    let round = function (x) {
        return Math.round(x);
    }
    let x = round(6.8);
    canvas('math_method1').innerHTML = x;
}

function demo2() {
    /**
     * 幂运算
     * @param x 待计算数值
     * @param y 幂
     * @returns {number}
     */
    let pow = function (x, y) {
        return Math.pow(x, y);
    };
    let x = pow(2, 2);
    canvas('math_method2').innerHTML = x;
}

function demo3() {
    /**
     * 平方根运算
     * @param x
     * @returns {number}
     */
    let sqrt = function (x) {
        return Math.sqrt(x);
    };
    let x = sqrt(4);
    canvas('math_method3').innerHTML = x;

}

function demo4() {
    let abs = function (x) {
        return Math.abs(x);
    };
    let x = abs(-7);
    canvas('math_method4').innerHTML = x;
}

function demo5() {
    let ceil = function (x) {
        return Math.ceil(x);
    };
    let x = ceil(6.1);
    canvas('math_method5').innerHTML = x;
}

function demo6() {
    let floor = function (x) {
        return Math.floor(x);
    };
    let x = floor(9.9);
    canvas('math_method6').innerHTML = x;
}

function demo7(flag, num) {
    /**
     * 正弦值
     * @param flag 自定义参数可选（角度，弧度）
     * @param num 角度值
     * @returns {number}
     */
    let sin = function (flag, num) {
        if (flag === '角度') {
            return Math.sin(num);
        } else if (flag === '弧度') {
            return Math.sin(num * Math.PI / 180);
        }
    };

    let x = sin(flag, num);
    canvas('math_method7').innerHTML = "sin" + num + "的" + flag + "为：" + x;

}

function demo8(flag, num) {
    /**
     * 余弦值
     * @param flag 自定义参数可选（角度，弧度）
     * @param num 角度值
     * @returns {number}
     */
    let cos = function (flag, num) {
        if (flag === '角度') {
            return Math.cos(num);
        } else if (flag === '弧度') {
            return Math.cos(num * Math.PI / 180);
        }
    };

    let x = cos(flag, num);
    canvas('math_method8').innerHTML = "cos" + num + "的" + flag + "为：" + x;

}

function demo9(num, flag) {
    /**
     * Math.min() 和 Math.max() 只能传入一组参数, 若参数值有非数值则返回NaN
     * 如果要传入数组则使用apply(this, array)展示，this值指向Math，array可以传任意数组对象
     * max()不用依赖上下文，可以传null
     * @type {*[]}
     */
    var arr = [];
    var fib = function (num, flag) {
        if (num === 1) {
            return arr = [1];
        } else if (num === 2) {
            return arr = [1, 1];
        } else {
            arr = [1, 1]
            let a = 1;
            let b = 1;
            let c = 2;
            for (let i=2; i<num; i++){
                arr.push(c);
                a = b;
                b = c;
                c = a + b;
            }
            if (flag === '最大') {
                return Math.max.apply(null, arr);
            } else if (flag === '最小') {
                return Math.min.apply(null, arr);
            }
        }
    }

    let new_num = fib(num, flag);
    canvas('math_method9').innerHTML =
        "斐波那契数列前"+num+"项, "+flag+"值："+new_num;
}

function demo10() {
    /**
     * 返回介于0-1之间的随机数
     * @returns {number}
     */
    let random = function (){
        return Math.random();
    };
    let x = random();
    canvas('math_method10').innerHTML = x;
}

function demo11() {
    /**
     * 可以和floor()取随机整数
     * *10为（0-9）之间随机整数，*11（0-10），*100（0-99）
     * @returns {number}
     */
    let random = function () {
        return Math.floor(Math.random() * 10);
    };

    let x = random();
    canvas('math_method11').innerHTML = x;
}

function demo12() {
    /**
     * 生成指定范围的随机数（含min不含max）
     * (max - min) + min， 保证生成的数字范围始终大于最小值
     * (max - min + 1) + min， 头尾都包含
     * @param min
     * @param max
     * @returns {number}
     */
    let getRndInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    let x = getRndInteger(10, 20);
    canvas('math_method12').innerHTML = x;
}
















