function canvas(id) {
    return document.getElementById(id);
}

function set_name(name) {
    return document.getElementsByName(name);
}

function demo() {
    /**
     * 创建时间对象
     * @type {Date}
     */
    const d = new Date();
    canvas("obj").innerHTML = d;
}
demo();
function demo01() {
    /**
     * 指定日期时间
     * month: 取值范围[0,11]，代表1月到12月
     * @type {Date}
     */
    var d = new Date(2019, 11, 26, 13, 22, 15);
    canvas('obj01').innerHTML = d;
}

function demo02() {
    /**
     * 年月同时出现，只有一个参数表示毫秒，
     * @type {Date}
     */
    var d = new Date(1022);
    canvas('obj02').innerHTML = d;
}

function demo03(year) {
    /**
     * 一个两位数年份将被解释为上个世纪
     * @type {Date}
     */
    let d;
    if (year === undefined) {
        d = new Date(99, 1, 2);
    } else {
        d = new Date(year, 0, 1);
        console.log(`d.getFullYear(): ${d.getFullYear()}`)
    }
    return canvas('obj03').innerHTML = d;
}

function demo04(param) {
    /**
     *
     * @type {Date}
     */
    var d = new Date(param);
    canvas('obj04').innerHTML = d;
}

function demo05(param) {
    /**
     * 表示从1970年1月1日8时增加的秒之后的日期
     * @type {Date}
     */
    let d = new Date(param);
    canvas('obj05').innerHTML = d;

}

function demo06() {
    /**
     *
     * @param date 日期对象
     * @returns {string}
     */
    let toString = function (date) {
        return date.toString();
    };

    let d = new Date();
    var date = toString(d)
    canvas('date_method').innerHTML = typeof date + "<br>" + date;
}


function demo07() {
    /**
     *
     * @param date
     * @returns {string}
     */
    let toUTCString = function (date) {
        return date.toUTCString();
    };

    let d = new Date();
    var date = toUTCString(d);
    canvas('date_method01').innerHTML = date;
}

function demo08() {
    /**
     *
     * @param date
     * @returns {string}
     */
    let toDateString = function (date) {
        return date.toDateString();
    };

    let d = new Date();
    var date = toDateString(d);
    canvas('date_method02').innerHTML = date;
}

function demo09() {
    /**
     * 日期间隔用/也可选
     * @type {Date}
     */
    let d = new Date("2020-12-26");
    canvas("date_format").innerHTML = d;
}

function demo10() {
    /**
     * ISO通过大写T分隔时期和时间
     * UTC(世界统一时间)通过Z分隔
     */
    let d = new Date("2022-11-11T08:08:08");
    canvas("date_format01").innerHTML = d;
}

function demo11() {
    /**
     * 在某些浏览器中，不带前导零的月或其会产生错误：
     */
    let d = new Date("02-11-2010");
    // let d = new Date("02/11/2010");
    canvas("date_format02").innerHTML = d;
}

function demo12() {
    /**
     * 月和天能够以任意顺序出现
     * 月能够以全称 (January) 或缩写 (Jan) 来写：
     */
    let d = new Date("Feb 19 2010");
    // let d = new Date("February 19 2018");
    canvas("date_format03").innerHTML = d;
}

var d = new Date();
function demo13() {
    /**
     * 返回本月当前第几天
     * @returns {number}
     */
    let get_date = function () {
        return d.getDate();
    }
    canvas('get_date').innerHTML = "本月第" + get_date() + "天";
}

function demo14() {
    /**
     * 返回当前周几（0固定代表周天，并不是序列）
     * @returns {number}
     */
    let get_day = function () {
        return d.getDay();
    }
    canvas('get_day').innerHTML = "今天周" + get_day();
}

function demo15() {
    /**
     * 返回当前年
     * @returns {number}
     */
    let get_full_year = function () {
        return d.getFullYear();
    }
    canvas('get_full_year').innerHTML = "今年是" + get_full_year() + "年";
}

function demo16() {
    /**
     * 返回当前时
     * @returns {number}
     */
    let get_hours = function () {
        return d.getHours();
    }
    canvas('get_hours').innerHTML = "现在是" + get_hours() + "时";
}

function demo17() {
    /**
     * 返回当前毫秒
     * @returns {number}
     */
    let get_milliseconds = function () {
        return d.getMilliseconds();
    }
    canvas('get_milliseconds').innerHTML = "现在是" + get_milliseconds() + "毫秒";
}

function demo18() {
    /**
     * 返回当前分
     * @returns {number}
     */
    let get_minutes = function () {
        return d.getMinutes();
    }
    canvas('get_minutes').innerHTML = "现在是" + get_minutes() + "时";
}

function demo19() {
    /**
     * 返回当前月,范围0-11
     * @returns {number}
     */
    let get_month = function () {
        return d.getMonth();
    }
    canvas('get_month').innerHTML = "现在是" + (get_month() + 1) + "月";
}

function demo20() {
    /**
     * 返回当前小时分钟的第x秒
     * @returns {number}
     */
    let get_seconds = function () {
        return d.getSeconds();
    }
    canvas('get_seconds').innerHTML = "现在是" + get_seconds() + "s";
}

function demo21() {
    /**
     * 返回当前时间（从 1970 年 1 月 1 日至今的毫秒）
     * @returns {number}
     */
    let get_time = function () {
        return d.getTime();
    }
    canvas('get_time').innerHTML = get_time();
}

function demo22() {
    /**
     * 设置 日
     * @param date
     * @returns {number}
     */
    let set_date = function (date) {
        return d.setDate(date);
    }
    set_date(10);
    canvas('set_date').innerHTML = d;
}

function demo23() {
    /**
     * 设置 年
     * @param year
     * @returns {number}
     */
    let set_fullYear = function (year) {
        return d.setFullYear(year);
    }
    set_fullYear(2010);
    canvas('set_full_year').innerHTML = d;
}

function demo24() {
    /**
     * 设置 小时
     * @param hours
     * @returns {number}
     */
    let set_hours = function (hours) {
        return d.setHours(hours);
    }
    set_hours(12);
    canvas('set_hours').innerHTML = d;
}

function demo25() {
    /**
     * 设置 毫秒
     * @param millSeconds
     * @returns {number}
     */
    let set_milliseconds = function (millSeconds){
        return d.setMilliseconds(millSeconds);
    }
    set_milliseconds(985);
    canvas('set_millseconds').innerHTML = d;
}

function demo26() {
    /**
     * 设置 分
     * @param minutes
     * @returns {number}
     */
    let set_minutes = function (minutes) {
        return d.setMinutes(minutes);
    }
    set_minutes(46);
    canvas('set_minutes').innerHTML = d;
}

function demo27() {
    /**
     * 设置 月 （0-11）
     * @param minutes
     * @returns {number}
     */
    let set_month = function (month) {
        return d.setMonth(month);
    }
    set_month(0);
    canvas('set_month').innerHTML = d;
}

function demo28() {
    /**
     * 设置 秒
     * @param seconds
     * @returns {number}
     */
    let set_seconds = function (seconds) {
        return d.setSeconds(seconds);
    }
    set_seconds(59);
    canvas('set_seconds').innerHTML = d;
}

function demo29() {
    /**
     * 设置1970至今的毫秒数
     * @param time
     * @returns {number}
     */
    let set_time = function (time) {
        return d.setTime(time);
    }
    set_time(1685005954978);
    canvas('set_time').innerHTML = d;
}