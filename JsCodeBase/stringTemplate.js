function demo() {
    let text = `Hello World!`;
    document.getElementById('demo').innerHTML = text;
}

demo();

function demo1() {
    let text = `He's often called "Johnny"`;
    document.getElementById('demo1').innerHTML = text;
}

demo1();

function demo2() {
    let text = `The quick
    brown fox
    jumps over
    the lazy dog`;
    document.getElementById('demo2').innerHTML = text;
}

demo2();

function demo3() {
    let firstName = 'Bill';
    let lastName = 'Gates';

    let text = `Hi ${firstName}, ${lastName}!`;
    document.getElementById('demo3').innerHTML = text;
}

demo3();

function demo4(){
    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;  // 保留两位小数
    document.getElementById('demo4').innerHTML = total;
}

demo4();

function demo5(){
    let header = "Templates Literals";
    let tags = ["templates literals", "java", "ECMA"];

    let html = `<h2>${header}</h2><ul>`;
    for (const x of tags){
        html += `<li>${x}</li>`;
    }
    html += `</ul>`;

    document.getElementById('demo5').innerHTML = html
}

demo5();