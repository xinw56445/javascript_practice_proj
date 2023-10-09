var x = 10;
function A() {
    var x = 6; //使用var 重新声明变量会改变变量的值
    document.getElementById('demo1').innerHTML = x
}
// var_demo此处可以使用x


function let_demo() {
    let x = 6; //使用let 重新声明变量不会改写，只会作用于这个区块中
}
//let_demo此处不可以使用x