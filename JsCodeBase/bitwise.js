function demo() {
    document.getElementById('and_demo').innerHTML = 5 & 1;
}

function demo1() {
    document.getElementById('or_demo').innerHTML = 5 | 1;
}

function demo2() {
    document.getElementById('xor_demo').innerHTML = 5 ^ 1;
}

function demo3() {
    /**
     * 负数是正数的二进制补码（反转）加一
     * @type {number}
     */
    document.getElementById('not_demo').innerHTML = ~5;
}

function demo4() {
    document.getElementById('left_demo').innerHTML = 5 << 1;
}

function demo5() {
    document.getElementById('right_demo').innerHTML = -5 >> 1;
}

function demo6() {
    document.getElementById('right_demo1').innerHTML = 5 >>> 1;
}