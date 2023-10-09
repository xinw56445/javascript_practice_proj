// "use strict";
const canvas = id => {
    return document.getElementById(id);
}
export {canvas}

// 逐个内联创建
export const name = "Bill";
export const age = 19;
// 在文件底部一次性创建
/**
 * const name = "Bill";
 * const age = 19;
 * export {name, age}
 */


const demo1 = () => {
    let date = new Date();
    return date.getFullYear();
}
export {demo1};

const message = () => {
    /**
     * 默认导出
     * 一个文件中只能有一个默认导出。
     * @type {string}
     */
    let name = "Bill";
    let age = 19;
    return name + " is " + age + " years old.";
}

export default message