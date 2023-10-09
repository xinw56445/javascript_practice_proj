// "use strict";
/*###########################################################*/


$(function () {
    let _lastResult, _resultDisplay;
    /**********************************计算结果展示**************************************/
    _resultDisplay = $("#calculation-results");
    const _clickEffect = (elem_id) => {$(elem_id).animate({opacity: '0.78'}, 100).animate({opacity: '1'}, 100)};
    /*****************************功能键 退格 清零 左右括号********************************/
    $("#clear-btn").on("click", () => {
        _clickEffect("#clear-btn");
        if (_resultDisplay.text().length >= 0) {
            _resultDisplay.text("0");
        }
    });

    $("#backspace").on("click", () => {
        _clickEffect("#backspace");
        if (_resultDisplay.text().length === 1) {
            return _resultDisplay.text("0");
        }
        else {
            let value = _resultDisplay.text().substring(0, _resultDisplay.text().length - 1);
            _resultDisplay.text(value);
        }
    });
    
    $("#bracket-left").on("click", () => {
        _clickEffect("#bracket-left");
        if (_resultDisplay.text() === "0") {
            return _resultDisplay.text("(");
        }
        else {
            let result = _resultDisplay.text().concat("(");
            _resultDisplay.text(result);
        }
    });

    $("#bracket-right").on("click", () => {
        _clickEffect("#bracket-right");
        if (_resultDisplay.text() === "0") {
            return _resultDisplay.text(")");
        }
        else {
            let result = _resultDisplay.text().concat(")");
            _resultDisplay.text(result);
        }
    });
    /*************************************数字键 0～9**********************************/
    try {
        if (_resultDisplay.text().length > 15) {
            alert("超出最大输入范围！")
            return true
        }
        else {
            $("#num_0").on("click", () => {
                _clickEffect("#num_0");
                if (_resultDisplay.text() === "0" || _resultDisplay.text() === "") {
                    return _resultDisplay.text("0");
                } else if (_resultDisplay.text() === "0.") {
                    return _resultDisplay.text(_resultDisplay.text().concat("0"));
                } else if (
                    _resultDisplay.text().search("`") !== -1
                ) {
                    return _resultDisplay.text("0");
                } else {
                    _resultDisplay.text(_resultDisplay.text().concat("0"));
                }
            });

            $("#num_1").on("click", () => {
                _clickEffect("#num_1");
                if (_resultDisplay.text() === "0") {
                    return _resultDisplay.text("1");
                } else if (
                    _resultDisplay.text().search("`") !== -1
                ) {
                    return _resultDisplay.text("1");
                }
                else {
                    _resultDisplay.text(_resultDisplay.text().concat("1"));
                }
            });

            $("#num_2").on("click", () => {
                _clickEffect("#num_2");
                if (_resultDisplay.text() === "0") {
                    return _resultDisplay.text("2");
                } else if (
                    _resultDisplay.text().search("`") !== -1
                ) {
                    return _resultDisplay.text("2");
                }
                else {
                    _resultDisplay.text(_resultDisplay.text().concat("2"));
                }
            });

            $("#num_3").on("click", () => {
                _clickEffect("#num_3");
                if (_resultDisplay.text() === "0") {
                    return _resultDisplay.text("3");
                } else if (
                    _resultDisplay.text().search("`") !== -1
                ) {
                    return _resultDisplay.text("3");
                }
                else {
                    _resultDisplay.text(_resultDisplay.text().concat("3"));
                }
            });

            $("#num_4").on("click", () => {
                _clickEffect("#num_4");
                if (_resultDisplay.text() === "0") {
                    return _resultDisplay.text("4");
                } else if (
                    _resultDisplay.text().search("`") !== -1
                ) {
                    return _resultDisplay.text("4");
                }
                else {
                    _resultDisplay.text(_resultDisplay.text().concat("4"));
                }
            });

            $("#num_5").on("click", () => {
                _clickEffect("#num_5");
                if (_resultDisplay.text() === "0") {
                    return _resultDisplay.text("5");
                } else if (
                    _resultDisplay.text().search("`") !== -1
                ) {
                    return _resultDisplay.text("5");
                }
                else {
                    _resultDisplay.text(_resultDisplay.text().concat("5"));
                }
            });

            $("#num_6").on("click", () => {
                _clickEffect("#num_6");
                if (_resultDisplay.text() === "0") {
                    return _resultDisplay.text("6");
                } else if (
                    _resultDisplay.text().search("`") !== -1
                ) {
                    return _resultDisplay.text("6");
                }
                else {
                    _resultDisplay.text(_resultDisplay.text().concat("6"));
                }
            });

            $("#num_7").on("click", () => {
                _clickEffect("#num_7");
                if (_resultDisplay.text() === "0") {
                    return _resultDisplay.text("7");
                } else if (
                    _resultDisplay.text().search("`") !== -1
                ) {
                    return _resultDisplay.text("7");
                }
                else {
                    _resultDisplay.text(_resultDisplay.text().concat("7"));
                }
            });

            $("#num_8").on("click", () => {
                _clickEffect("#num_8");
                if (_resultDisplay.text() === "0") {
                    return _resultDisplay.text("8");
                } else if (
                    _resultDisplay.text().search("`") !== -1
                ) {
                    return _resultDisplay.text("8");
                }
                else {
                    _resultDisplay.text(_resultDisplay.text().concat("8"));
                }
            });

            $("#num_9").on("click", () => {
                _clickEffect("#num_9");
                if (_resultDisplay.text() === "0") {
                    return _resultDisplay.text("9");
                } else if (
                    _resultDisplay.text().search("`") !== -1
                ) {
                    return _resultDisplay.text("9");
                }
                else {
                    _resultDisplay.text(_resultDisplay.text().concat("9"));
                }
            });
        }
    } catch (error) {
        _resultDisplay.text(error.message);
    }
    /*****************************************小数点*********************************/
    $("#point").on("click", () => {
        _clickEffect("#point");
        if (_resultDisplay.text() === "0") {
            return _resultDisplay.text("0");
        } else if (_resultDisplay.text().substring(_resultDisplay.text().length - 1) !== ".") {
            return _resultDisplay.text(_resultDisplay.text().concat("."));
        } else if (_resultDisplay.text().substring(_resultDisplay.text().length - 1) === ".") {
            return true
        } else if (
            (_resultDisplay.text().indexOf(".") === 1 && _resultDisplay.text().search(/\+/g) !== -1) ||
            (_resultDisplay.text().indexOf(".") === 1 && _resultDisplay.text().search(/-/g) !== -1) ||
            (_resultDisplay.text().indexOf(".") === 1 && _resultDisplay.text().search(/x/g) !== -1) ||
            (_resultDisplay.text().indexOf(".") === 1 && _resultDisplay.text().search(/\//g) !== -1) ||
            (_resultDisplay.text().indexOf(".") === 1 && _resultDisplay.text().search(/\(/g) !== -1) ||
            (_resultDisplay.text().indexOf(".") === 1 && _resultDisplay.text().search(/\)/g) !== -1)
        ) {
            _resultDisplay.text(_resultDisplay.text().concat("."));
        }
    });
    /*********************************运算符键盘***********************************************/
    $("#btn_add").on("click", () => {
        _clickEffect("#btn_add");
        if (
            _resultDisplay.text().lastIndexOf("+") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("-") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("x") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("/") === _resultDisplay.text().length - 1
        ) {
            let new_text =
                _resultDisplay.text().replace(_resultDisplay.text().charAt(_resultDisplay.text().length - 1), "+");
            _resultDisplay.text(new_text);
        } else if (_resultDisplay.text().search('`') !== -1) {
            _resultDisplay.text(_resultDisplay.text().replace("`", "+")); 
        } else {
            _resultDisplay.text(_resultDisplay.text().concat("+"));
        }
    });
    $("#btn_subtract").on("click", () => {
        _clickEffect("#btn_subtract");
        if (
            _resultDisplay.text().lastIndexOf("+") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("-") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("x") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("/") === _resultDisplay.text().length - 1
        ) {
            let new_text =
                _resultDisplay.text().replace(_resultDisplay.text().charAt(_resultDisplay.text().length - 1), "-");
            _resultDisplay.text(new_text);
        } else if (_resultDisplay.text().search('`') !== -1) {
            _resultDisplay.text(_resultDisplay.text().replace("`", "-")); 
        } else {
            _resultDisplay.text(_resultDisplay.text().concat("-"));
        }
    });
    $("#btn_multiply").on("click", () => {
        _clickEffect("#btn_multiply");
        if (
            _resultDisplay.text().lastIndexOf("+") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("-") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("x") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("/") === _resultDisplay.text().length - 1
        ) {
            let new_text =
                _resultDisplay.text().replace(_resultDisplay.text().charAt(_resultDisplay.text().length - 1), "x");
            _resultDisplay.text(new_text);
        } else if (_resultDisplay.text().search('`') !== -1) {
            _resultDisplay.text(_resultDisplay.text().replace("`", "x")); 
        } else {
            _resultDisplay.text(_resultDisplay.text().concat("x"));
        }
    });
    $("#btn_divide").on("click", () => {
        _clickEffect("#btn_divide");
        if (
            _resultDisplay.text().lastIndexOf("+") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("-") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("x") === _resultDisplay.text().length - 1 ||
            _resultDisplay.text().lastIndexOf("/") === _resultDisplay.text().length - 1
        ) {
            let new_text =
                _resultDisplay.text().replace(_resultDisplay.text().charAt(_resultDisplay.text().length - 1), "/");
            _resultDisplay.text(new_text);
        } else if (_resultDisplay.text().search('`') !== -1) {
            _resultDisplay.text(_resultDisplay.text().replace("`", "/")); 
        } else {
            _resultDisplay.text(_resultDisplay.text().concat("/"));
        }
    });
    /*********************************计算结果***********************************************/
    const setError = () => {  // 表达式错误自动归零
        function result(time, message) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log(message);
                    resolve(message);
                }, time);
            });
        }

        async function asyncFunc() {
            _resultDisplay.text(await result(100, 'Error'));
            _resultDisplay.text(await result(1000, '0'));
        };
        asyncFunc();
    }
    _lastResult = $("#last-result");;
    $("#final-result").on("click", () => {
        _clickEffect("#final-result");
        if ((_resultDisplay.text().search(/\(/g) !== -1) && (_resultDisplay.text().search(/\)/g) !== -1)) {  // 过滤括号
            if (_resultDisplay.text().indexOf("(") < _resultDisplay.text().indexOf(")")) {
                let textInParentheses;  // 括号中的文本
                textInParentheses = _resultDisplay.text().substring(_resultDisplay.text().indexOf("(") + 1, _resultDisplay.text().indexOf(")"));
                if (textInParentheses !== "") {
                    if (textInParentheses.indexOf("+") !== 0 ||
                        textInParentheses.indexOf("-") !== 0 ||
                        textInParentheses.indexOf("x") !== 0 ||
                        textInParentheses.indexOf("/") !== 0
                    ) {
                        if (_resultDisplay.text().search(/x/g) !== -1) {
                            _resultDisplay.text(_resultDisplay.text().replace(/x/g, "*"));
                        }
                        _lastResult.text(_resultDisplay.text() + " =");
                        _resultDisplay.text(eval(_resultDisplay.text()));
                    } else {
                        setError();
                        return _resultDisplay;
                    }
                } else {
                    setError();
                    return _resultDisplay;
                }
            } else {
                setError();
                return _resultDisplay;
            }
        } else {  // 没有括号
            if ( // 只有一半括号报错
                (_resultDisplay.text().search(/\(/g) !== -1) && (_resultDisplay.text().search(/\)/g) === -1) ||
                (_resultDisplay.text().search(/\(/g) === -1) && (_resultDisplay.text().search(/\)/g) !== -1)
            ) {
                setError();
                return _resultDisplay;
            } else if ( // 最后一位是运算符则报错
                _resultDisplay.text().lastIndexOf("+") === _resultDisplay.text().length - 1 ||
                _resultDisplay.text().lastIndexOf("-") === _resultDisplay.text().length - 1 ||
                _resultDisplay.text().lastIndexOf("x") === _resultDisplay.text().length - 1 ||
                _resultDisplay.text().lastIndexOf("/") === _resultDisplay.text().length - 1
            ) {
                setError();
                return _resultDisplay;
            } else {
                if (!isNaN(_resultDisplay.text())) {
                    if (_lastResult.text().search(/\+/g) !== -1 || // 是数字且缓存结果有运算符
                        _lastResult.text().search(/-/g) !== -1 ||
                        _lastResult.text().search(/x/g) !== -1 ||
                        _lastResult.text().search(/\//g) !== -1
                    ) {
                        _lastResult.text("Ans = " + eval(_resultDisplay.text()));
                    } else {
                        console.log("text 只有数字这一个条件")
                        _lastResult.text(_resultDisplay.text() + " =");
                    }
                    if (_resultDisplay.text().search(/x/g) !== -1) {
                        _resultDisplay.text(_resultDisplay.text().replace(/x/g, "*"));
                    }
                    return _resultDisplay.text(eval(_resultDisplay.text()) + "`");
                } else { // 输入不是数字
                    _lastResult.text(_resultDisplay.text() + " =");
                    if (_resultDisplay.text().search(/x/g) !== -1) {
                        _resultDisplay.text(_resultDisplay.text().replace(/x/g, "*"));
                    } else if (_resultDisplay.text().search(/`/g) !== -1) {
                        _resultDisplay.text(_resultDisplay.text().substring(0, _resultDisplay.text().indexOf("`")));
                        _lastResult.text("Ans = " + eval(_resultDisplay.text()));
                    }
                    try {
                        let _value, _len;
                        _value = eval(_resultDisplay.text());  // 预计算值
                        _len = _value.toString().length;
                        if ((_len > 15) && (parseInt(_value) !== parseFloat(_value))) {  // 预值是小数且.后位数大于15
                            let _float = parseFloat(_value).toFixed(10);
                            _float = parseFloat(_float);
                            return _resultDisplay.text(_float + "`");
                        }
                        _resultDisplay.text(eval(_resultDisplay.text()) + "`");
                    } catch (err) {
                        alert("Unknown Exception");
                    }
                }
            }
        }
    });
});