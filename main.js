var record = {
    name : "",
    age : "",
    education : "",
    language : "",
    firstLang : "",
    learnTime : "",

    timeSpent : 0,
    correctRate: 0
};

var divs = new Array(
    document.getElementById("div1"),
    document.getElementById("div2"),
    document.getElementById("div3"),
    document.getElementById("div4"),
    document.getElementById("div5"),
    document.getElementById("div6"),
    document.getElementById("div7"),
    document.getElementById("div8"),
    document.getElementById("div9"),
    document.getElementById("div10"),
);

var btns = new Array(
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
    document.getElementById("btn5"),
    document.getElementById("btn6"),
    document.getElementById("btn7"),
    document.getElementById("btn8"),
    document.getElementById("btn9")
);

for(var i=1;i<divs.length;i++) {
    divs[i].style.display = "none";
}

$("#btn1").click(function(){
    $("div1").hide();
    $("div2").show();
})