function canvas(id) {
    return document.getElementById(id)
}

function demo() {
    let time, output;
    time = 9;
    if (time < 12) {
        output = '上午好！';
    }
    canvas('condition_method').innerHTML = output;
}

function demo1() {
    let time, output;
    time = new Date().getHours();
    if (time < 12) {
        output = '上午好！';
    } else {
        output = '下午好！';
    }
    canvas('condition_method1').innerHTML = output;
}

function demo2() {
    let time, output;
    time = new Date().getHours();
    if (time < 12) {
        output = '上午好！';
    } else if (time === 12) {
        output = '中午好！'
    } else {
        output = '下午好！';
    }
    canvas('condition_method2').innerHTML = output;
}

function demo3() {
    // 未匹配任何case分配执行default，如果不是最后一个，要加上break
    let time, output;
    time = new Date().getDay();

    switch (time) {
        default:
            output = '期待周末';
            break;
        case 0:  // 0和6可以共享一个代码块
        case 6:
            output = '周末';
            break;
        case 1:
            output = '周一';
            break;
        case 2:
            output = '周二';
            break;
        case 5:
            output = '周五';
    }
    canvas('condition_method3').innerHTML = output;
}