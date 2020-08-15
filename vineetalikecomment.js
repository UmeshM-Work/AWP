var count = 0;


function likehere() {
    let likeCount = document.querySelector("#like");

    count++;

    likeCount.innerHTML = count + "L"

}

function dislikehere() {
    let likeCount = document.querySelector("#dislike");

    count++;

    likeCount.innerHTML = count + "DL"

}




function commenthere() {


    let inputval = document.querySelector("#input1").value;
    let cloneValue = document.querySelector("#placement").cloneNode(true);
    cloneValue.innerHTML = inputval;

    let commentdiv = document.querySelector("#commentdiv");

    commentdiv.insertBefore(cloneValue, commentdiv.firstChild)
}