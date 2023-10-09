function canvas(id) {
    return document.getElementById(id);
}

function demo() {
    return canvas('typeof_demo').innerHTML =
        typeof "Bill" + '<br>' +
        typeof 3.14 + '<br>' +
        typeof NaN + '<br>' +
        typeof false + '<br>' +
        typeof [1, 2, 3, 4] + '<br>' +
        typeof {name: 'Bill', age: 61} + '<br>' +
        typeof new Date() + '<br>' +
        typeof function () {
        } + '<br>' +
        typeof myCar + '<br>' +
        typeof null;

}

demo();

function demo1() {
    return canvas('constructor_demo').innerHTML =
        "Bill".constructor + "<br>" +
        (3.14).constructor + "<br>" +
        false.constructor + "<br>" +
        [1, 2, 3, 4].constructor + "<br>" +
        {name: "Bill", age: 63}.constructor + "<br>" +
        new Date().constructor + "<br>" +
        function () {

        }.constructor ;
}

demo1();

const myArray = [1,3,5,7,9];
function isArray1() {
    /**
     * 检查 constructor 属性以确定对象是否为数组（包含 "Array" 一词）
     * 'function Array() { [native code] }'
     */
    const x = () => {
        return myArray.constructor.toString().indexOf("Array") > -1;
    }
    canvas('constructor_demo1').innerHTML = x();
}

function isArray2() {
    /**
     * 检查对象是否为数组函数
     * 'function Array() { [native code] }'
     */
    const x = () => {
        return myArray.constructor===Array;
    }
    canvas('constructor_demo2').innerHTML = x();
}

function demo2() {
    /**
     * 清空变量
     * @type {string}
     */
    let car = "BMW";
    car = undefined;

    canvas('undefined_demo').innerHTML = car + "类型是：" + typeof car;
}

function demo3() {
    let person = {firtsName: "Bill", lastName: "Gates", age: 64};
    person = null;

    canvas('null_demo').innerHTML = person + "类型是：" + typeof person;
}