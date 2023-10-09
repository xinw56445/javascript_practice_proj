// "use strict";
function canvas(id) {
    return document.getElementById(id);
}

function demo() {
    let hello = function () {
        return "hello Javascript";
    }
    canvas('demo_arrow').innerHTML = hello();
}

function demo1() {
    /**
     * 如果函数只有一个语句也可以直接写成 let hello = () => "Hello JavaScript"
     * () 里可以正常传参，当然如果只有一个参数也可以不写括号
     * @return {string}
     */
    let hello = () => {
        return "hello Javascript";
    }
    canvas('demo_arrow1').innerHTML = hello();
}

function demo2() {
    /**
     * 此例中，this先是被window对象调用，然后被button对象调用，this指代的对象在变化
     * addEventListener(listener_type, fun_obj(), type) 添加事件监听
     * listener_type: 事件名称，字符串，必填。
     * fun_obj(): 监听函数，必填
     * type: 触发类型，布尔，可选，默认null
     */
    let hello;
    hello = function () {
        canvas('this_for_ordinary').innerHTML += this;
    }
    // window 对象调用
    window.addEventListener("load", hello);
    // button 对象调用
    document.getElementById('btn').addEventListener("click", hello);
}

demo2();

function demo3() {
    /**
     * “this”关键字表示拥有该函数的对象，无论是谁调用该函数
     */
    let hello;
    hello = () => {
        canvas('this_for_arrow').innerHTML += this;
    }

    window.addEventListener("load", hello);
    document.getElementById('btn1').addEventListener("click", hello);
}

demo3();