var z = 0;

function add() {

    let x = Number(document.querySelector("#input1").value);
    let y = Number(document.querySelector("#input2").value);

    z = x + y;

}

function sub() {

    let x = Number(document.querySelector("#input1").value);
    let y = Number(document.querySelector("#input2").value);

    z = x - y;

}

function multi() {

    let x = Number(document.querySelector("#input1").value);
    let y = Number(document.querySelector("#input2").value);

    z = x * y;

}

function divi() {

    let x = Number(document.querySelector("#input1").value);
    let y = Number(document.querySelector("#input2").value);

    z = x / y;

}



function output() {
    document.querySelector("#output1").value = z;
}
