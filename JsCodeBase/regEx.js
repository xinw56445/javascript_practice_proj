function canvas(id) {
    return document.getElementById(id);
}

function demo() {
    /**
     * 返回匹配到的文本第一个字符的索引
     * @type {string}
     */
    let str = 'where are you doing?';
    let m = str.search(/are/i);
    canvas('search_reg').innerHTML = m;
}

demo();

function demo1() {
    let str = 'I still have three more chances';
    let text = str.replace(/three/i, "five");
    canvas('replace_reg').innerHTML = text;
}

const myName = "I'm Bill Gates";
const str = 'Is this all there is?';
const text = 'Is '+ "<br>" + 'this all there' +"<br>"+ 'is?';

function demo2() {
    let x = myName.match(/bill/i);
    canvas('i_reg').innerHTML = x;
}

function demo3() {
    /**
     * 全局搜索
     * @type {RegExpMatchArray}
     */
    let n = str.match(/is/g);
    canvas('g_reg').innerHTML = n;
}

function demo4() {
    /**
     * 多行检索匹配文本
     * @type {RegExpMatchArray}
     */
    let m = text.match(/is/m);
    canvas('m_reg').innerHTML = m;
}

function demo5() {
    /**
     *
     * @type {RegExpMatchArray}
     */
    let m = str.match(/[is]/g);
    canvas('reg_demo').innerHTML = m;
}

const num = '123456789';

function demo6() {
    /**
     *
     * @type {RegExpMatchArray}
     */
    let m = num.match(/[0-4]/g);
    canvas('reg_demo1').innerHTML = m;
}

function demo7() {
    /**
     *
     * @type {RegExpMatchArray}
     */
    let m = str.match(/(is|all)/g);
    canvas('reg_demo2').innerHTML = m;
}

const love = 'Love you 3 times';
function demo8() {
    /**
     *
     * @type {RegExpMatchArray}
     */
    let m = love.match(/\d/g);
    canvas('reg_demo3').innerHTML = m;
}

function demo9() {
    let m = str.match(/\s/g);
    canvas('reg_demo4').innerHTML = m;
}

function demo10() {
    /**
     * 在开头或结尾搜索
     * @type {RegExpMatchArray}
     */
    let m = str.match(/\bis/g);
    canvas('reg_demo5').innerHTML = m;
}

function demo11() {
    let m = str.match(/\u0069/g);
    canvas('reg_demo6').innerHTML = m;
}

function demo12() {
    let m = str.match(/is+/g);
    canvas('reg_demo7').innerHTML = m;
}

function demo13() {
    /**
     * 以全局搜索 i 后面跟0个或多个 s 的字符
     * @type {RegExpMatchArray}
     */
    let m = str.match(/is*/g);
    canvas('reg_demo8').innerHTML = m;
}

function demo14() {
    /**
     * 匹配任何包含零个或一个n的字符串
     * @type {RegExpMatchArray}
     */
    let m = str.match(/is?/g);
    canvas('reg_demo9').innerHTML = m;
}

function demo15() {
    /**
     * 以正则匹配文本
     * @type {RegExp}
     * @return{Boolean}
     */
    let patt = /e/;
    let text = document.getElementById('text_demo').innerHTML;
    canvas('reg_method').innerHTML = patt.test(text);
}

function demo16() {
    /**
     * 以正则匹配文本
     * @type {RegExp}
     * @return{String}
     */
    let patt = /e/;
    let text = document.getElementById('text_demo1').innerHTML;
    canvas('reg_method1').innerHTML = patt.exec(text);
}