// "use strict";
function demo(params) {
    let id1 = document.getElementById("id1");
    if (id1.checkValidity() == false) {
        // document.getElementById("demo").innerHTML = id1.validationMessage;
        alert(id1.validationMessage);
    }
    else {
        alert("OK");
    }
}

function demo1(params) {
    /**
     * 使用 setCustomValidity 设置了自定义提示后，validity.customError 就会变成 true，
     * checkValidity 总是会返回 false。如果要重新判断需要取消自定义提示，方式如下：
     * setCustomValidity("");
     * setCustomValidity(null);
     * setCustomValidity(undefined);
     */
    let id2 = document.getElementById("id2");
    if (id2.checkValidity() == false) {
        id2.setCustomValidity("超出限制！");
        alert(id2.validationMessage);
    }       
    id2.setCustomValidity(""); 
    if (id2.checkValidity() == true) {
        alert("OK");
    }          
}

function demo2(params) {
    let text, id3;
    id3 = document.getElementById("id3");
    text = "";
    if (id3.validity.rangeOverflow) {
        text = "超出范围！";
    } 
    else {
        text = "输入正确！";
    }
    alert(text);
}

function demo3(params) {
    let text, id4;
    id4 = document.getElementById("id4");
    text = "";
    if (!isNumber(id4.value)) {
        text = "输入不是数字！";
    } 
    else if(id4.validity.rangeUnderflow) {
        text = "低于最小范围！";
    }
    else {
        text = "输入正确！";
    }
    alert(text);
}

function isNumber(params) {
    /**
     * isFinite() 函数用于检查其参数是否是无穷大，也可以理解为是否为一个有限数值（finite number）。
     * 提示： 如果参数是 NaN，正无穷大或者负无穷大，会返回 false，其他返回 true。
     */
    return /[0-9]/.test(params) && isFinite(params); 
}