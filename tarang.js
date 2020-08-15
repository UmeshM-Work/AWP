function validation() {



    let x = document.querySelector(".inputid1").value;

    let y = document.querySelector(".inputid2").value;



    let z = /^[A-Za-z0-9.@]{3,12}$/;
    let a = /^([A-Za-z0-9]{5,12})([@]{1,})([0-9]{1,})$/

    if (z.test(x)) {
        document.getElementById("validation").style.color = "green";
    } else {
        document.getElementById("validation").style.color = "Red";

    }

}



// function validation() {
//     var uname = document.getElementById("unm").value;
//     var psw = document.getElementById("pwd").value;
//     //  /^ ([A-Za-z0-9]{,})  ([@]{1,1})() $/
//     var username = /^[A-Za-z0-9.@]{3,12}$/;
//     var password = /^([A-Za-z0-9]{5,12})([@]{1,})([0-9]{1,})$/

//     if (username.test(uname)) {
//         document.getElementById("uvalidation1").innerHTML = "valid";
//         document.getElementById("uvalidation").style.visibility = "hidden";
//     } else {
//         document.getElementById("uvalidation").innerHTML = "Invalid";
//     }
//     if (password.test(psw)) {
//         document.getElementById("pvalidation1").innerHTML = "valid";
//         document.getElementById("pvalidation").style.visibility = "hidden";
//     } else {
//         document.getElementById("pvalidation").innerHTML = "Invalid";
//     }
// }