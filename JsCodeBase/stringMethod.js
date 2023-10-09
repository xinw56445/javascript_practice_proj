
// 
function doc(Id_doc, str_meg) {
    document.getElementById(Id_doc).innerHTML = str_meg;
}

function demo(x) {
    return x.length;
}
var str = "The full name of China is the People's Republic of China.";
doc('demo', "变量x的长度： " + demo(str));

function demo1(field, content, content_index) {
    /*
        content_index设置第二次开始位置的参数，indexOf不支持正则

        param: content, type: str; 
        param: content_index, type: int
        */
    if (content_index) {
        return field.indexOf(content, content_index);
    } else {
        return field.indexOf(content);
    }
}

document.getElementById('demo1').innerHTML =
    "字段‘China’首次出现的位置" + demo1(str, 'China') +
    "第二次出现的位置" + demo1(str, 'China', 18) +
    "没有字符'1'，则返回" + demo1(str, '1');

function demo2(field, content) {
    /*
        字段最后出现的位置

        param: content, type: str; 
        param: content_index, type: int
        */
    return field.lastIndexOf(content);
}
document.getElementById('demo2').innerHTML = "字段'China'最后出现的位置" + demo2(str, 'China');

function demo3(field, content) {
    /*
        search支持正则表达式，但无法设置第二次出现的

        param: content, type: str; 
        */
    return field.search(content);
}

document.getElementById('demo3').innerHTML = "China" + demo3(str, 'C.*na');

function demo4(field, start_index, end_index) {
    /*
        slice() 提取字符串的某个部分并在新字符串中返回被提取的部分。

        param：start_index：起始索引，
        param：end_index：终止索引， 
        
        start和end非必填项 
        */
    return field.slice(start_index, end_index);
}
document.getElementById('demo4').innerHTML = "例： 字段" + str + "中, 第-13到第-6索引的字符为： " + demo4(str, -13, -6);

function demo5(field, start_index, end_index) {
    /*
        substring() 无法接受负的索引。

        param：start_index：起始索引，
        param：end_index：终止索引
        */
    return field.substring(start_index, end_index);
}

document.getElementById('demo5').innerHTML = "例： 字段" + str + "里，第6到第13索引的字符为：" + demo5(str, 6, 13);

function demo6(field, start_index, length) {
    /*
        substr() 返回从起始字符到指定长度的字符

        param：start_index：起始索引，
        param：length：提取字符的长度
        */
    return field.substr(start_index, length);
}

document.getElementById('demo6').innerHTML = "例：字段" + str + "里, 第6个字符开始截取7个字符长度，返回的字符片段：" + demo6(str, 6, 7);

function demo7(field, original_str, target_str) {
    /*
        replace() 方法不会改变调用它的字符串。它返回的是新字符串。对大小写敏感

        param: original_str: 原字符
        param: target_str: 替代字符
        */
    return field.replace(original_str, target_str);
}
let x = demo7(str, "China", "china");
document.getElementById("demo7").innerHTML = "例：字段" + str + "里，将China替换为china为：" + x;

doc('demo8', "例：字段" + str + "里，将of替换为in：" + demo7(str, /OF/i, "in"));

doc("demo9", "例：字段" + str + "里, 将所有of替换为in：" + demo7(str, /of/g, "in"));

function demo8(field, is_toUpperCase = true) {
    /*
        通过 toUpperCase() 把字符串转换为大写
        toLowerCase() 转换小写
        is_toUpperCase : 自定义参数
    */
    if (is_toUpperCase) {
        return field.toUpperCase();
    }
    return field.toLowerCase();
}

var text = "Hello World";
doc("demo10", "例：字段" + text + "转换为大写" + demo8(text));
doc("demo11", "例：字段" + text + "转换为小写" + demo8(text, is_toUpperCase = false));

function demo9(field, str_1, str_2 = "") {
    /*
        concat() 方法可用于代替加运算符
     */
    return field.concat(str_1, str_2);
}

let text1 = "Hello";
let text2 = "World";
doc("demo12", text1 + "和" + text2 + "拼接到一起为：" + demo9(text1, " ", text2) + "。等效于‘+’");

function demo10(field) {
    /**
     *  trim() 方法用于删除字符串两端的空白符
     */
    return field.trim();
}

let text3 = "    HelloWorld       ";
doc("demo13", text3 + "去除空白后：" + demo10(text3));

var str = "       Hello World!        ";
console.log(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

// 还可以使用replace 方案把 trim 添加到JavaScript String.prototype

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
    let str = "       Hello World!        ";
    document.getElementById('demo').innerHTML = str.trim();
}

function demo11(str) {
    /**
     *  charAt()方法返回指定字符串索引对应的字符 （找不到则返回""）
     */
    return str.charAt(1);
}

var str = "HELLO WORLD";
document.getElementById('demo14').innerHTML = "字符串" + str + "第二个字符为" + demo11(str);

function demo12() {
    /**
     * charCodeAt() 返回字符串指定索引的字符的 unicode 编码
     */
    return this.str.charCodeAt(1);
}

document.getElementById('demo15').innerHTML = "字符串" + str + "第二个字符的unicode编码为" + demo12();

function demo13(flag) {
    /**
     * split() 将字符串拆分为一个字符数组，可以指定分隔方式
     */
    let arr = this.str.split('');
    var text = "";
    var i;
    if (!flag) {
        for (i = 0; i < arr.length; i++) {
            text += arr[i] + "<br>"
        }
        return text;
    } else {
        for (i = 0; i < arr.length; i++) {
            if (i == 1) {
                return arr[i];
            }
        }
    }
}

document.getElementById("demo16").innerHTML =
    "字符串" + this.str + "拆分之后为: <br>" + demo13() + "第二个字符为" + demo13(1);

function demo14(str, regexp) {
    /**
     * match() 方法根据正则表达式在字符串中搜索匹配项，并将匹配项作为 Array 对象返回。
     * 
     * param：regexp：正则匹配规则
     * 如果正则表达式不包含 g 修饰符（执行全局搜索），match() 方法将只返回字符串中的第一个匹配项。
     */
    return str.match(regexp);
}

var text = "The rain in SPAIN stays mainly in the plain";
document.getElementById('demo17').innerHTML =
    "在字符串" + text + "中匹配所有的‘ain’，则返回数组：" + demo14(text, /ain/g);

document.getElementById('demo18').innerHTML =
    "在字符串" + text + "中匹配所有的‘ain’，不区分大小写：" + demo14(text, /ain/gi);

function demo15(str, search_value, start) {
    /**
     * 如果字符串包含指定值，includes() 方法返回 true。
     * 
     * param: search_value: 搜索值
     * param: start: 开始搜索的位置 int 默认0
     */
    if (!start) {
        return str.includes(search_value);
    }
    return str.includes(search_value, start);
}

document.getElementById("demo19").innerHTML =
    "字符串" + this.text + "是否包含'ain': " + demo15(this.text, 'ain') +
    ", 从索引为‘43’开始，是否包含‘ain’: " + demo15(this.text, 'ain', 43);

function demo16(str, content_head, start) {
    /**
     * 如果字符串以指定值开头，则 startsWith() 方法返回 true，否则返回 false
     * 
     * param: content_head: 搜索值 区分字母大小写
     * param: start: 开始搜索的位置 int 默认0
     */
    if (!start) {
        return str.startsWith(content_head);
    }
    return str.startsWith(content_head, start);
}

document.getElementById("demo20").innerHTML = 
    "字符串"+this.text+ "是以 The 开头的吗: " + demo16(this.text, 'The') + 
    ", 从索引‘28’开始，是否以 The 开头: " + demo16(this.text, 'The', 28);

function demo17(str, content_end, length) {
    /**
     * 如果字符串以指定值结尾，则 endsWith() 方法返回 true，否则返回 false：
     * 
     * param: content_end: 搜索值 区分字母大小写
     * param: start: 以content_end开始，倒序搜索的位置的长度 int 默认长度 str.length 
     */
    if (!length) {
        return str.endsWith(content_end);
    } 
    return str.endsWith(content_end, length);
}

document.getElementById('demo21').innerHTML = 
"字符串"+this.text+"是以 ain 结尾的吗: "+demo17(this.text, 'ain')+
", 从最后一个开始搜索，搜索长度为20，‘ly’是否存在: " + demo17(this.text, 'ly', 20);