var z = 0;

function cal() {

    var x = Number(document.getElementById("input1").value);

    var y = Number(document.getElementById("input2").value);

    if (document.querySelector("#plus")) {

        // if (document.getElementById("plus")) {
        z = x + y;
        //     document.getElementById("output1").value = z;
    }
}




function output() {
    document.querySelector("#output1").value = z;
}