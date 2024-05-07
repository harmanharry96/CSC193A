function alertfunction(){
    document.getElementById("TextArea").style.fontSize = "24pt";
}

function alertfunction1(){
    document.getElementById("TextArea").style.fontWeight = "bold";
    document.getElementById("TextArea").style.color = "blue";
    document.getElementById("TextArea").style.textDecoration = "underline";
}

function alertfunction2(){
    document.getElementById("TextArea").style.fontWeight = "normal";
}

function alertfunction3() {
    var text = document.getElementById("TextArea");
    text.value = text.value.toUpperCase() + '-Moo';
}

