
// "use strict";
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    // var x = document.getElementsByName('fname').item(0).value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}

function validateFormDemo(params) {
    let userName, passWorld, dateTime, email;
    userName = document.forms["inputValidate"]["userName"].value;
    passWorld = document.forms["inputValidate"]["passWorld"].value;
    dateTime = document.forms["inputValidate"]["dateTime"].value;
    email = document.forms["inputValidate"]["email"].value;

    if(userName == null || userName == ""){
        alert("用户名不能为空");
        return false;
    } 
    else if ((!isNaN(passWorld) || passWorld < 0) && (passWorld.length < 6 || passWorld.length > 16)) {
        alert("密码不符合要求");
        return false;
    } 
    else if (dateTime.length !== 4 || dateTime == "") {
        alert("日期不是四位数的年或为空");
        return false;
    } 
    else if (email.search(/\@/g) != -1 && email.search(/\./g) != -1) {
        alert("邮箱格式不正确");
        return false; 
    } 
    else {
        alert("注册成功");
    }
}