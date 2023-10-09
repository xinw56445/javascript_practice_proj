// "use strict"

function set_json(params) {
    var txt = '{"sites" : [' +
        '{"name" : "Google", "url" : "https://www.google.com"},' +
        '{"name" : "Taobao", "url" : "https://www.taobao.com"},' +
        '{"id": 2, "url": "http://www.taobao.com"}]}';
    return JSON.parse(txt);
}

function demo(params) {
    document.getElementById('demo').innerHTML = set_json().sites[1].name +
        ' ' + set_json().sites[1].url;
}
