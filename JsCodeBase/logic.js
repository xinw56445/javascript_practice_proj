function canvas(id) {
    return document.getElementById(id);
}

function demo() {
    let x = 10;
    let y = 11;

    canvas('logic_method').innerHTML = Boolean(x > y);
}

function demo1() {
    let x = false;
    let y = new Boolean(false);

    canvas('logic_method1').innerHTML =
        "typeof x 返回 " + typeof x + "<br>typeof y 返回 " + typeof y;
}

function demo2() {
    let age, result;
    age = canvas('age').value;
    age = Number(age);
    if (isNaN(age)) {
        result = '输入错误';
    } else {
        result = (age >= 18) ? "成年" : "未成年";
    }
    console.log(age)
    canvas('logic_method2').innerHTML = "您的年龄属于：" + result;
}