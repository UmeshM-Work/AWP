//var counter = 1;
//var commentcounter = 1
var likecounter = 0;

function comment() {
    // let newElement = document.createElement("div");
    //newElement.textContent = "comment" + counter;

    let userComment = document.querySelector("#inputid").value;

    const newElement = document.createElement("div");
    newElement.textContent = userComment;

    // styling
    newElement.style.background = "tomato";
    newElement.style.margin = "4px";
    newElement.style.borderRadius = "100px"

    // appending to the parent box
    const commentBox = document.querySelector("#commentBox");
    commentBox.insertBefore(newElement, commentBox.firstChild);

    ocument.querySelector("#inputId1").value = "";
    //commentBox.appendChild(newElement);

    //commentcounter++
    // counter++;


}

function like() {
    likecounter++;
    document.querySelector("#likeid").innerHTML = likecounter + ' <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>'

}