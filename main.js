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
    $("#div1").hide();
    $("#div2").show();
})

$("#btn2").click(function(){
    $("#div2").hide();
    $("#div3").show();
})

$("#btn3").click(function(){
    $("#div3").hide();
    $("#div4").show();
})

$("#btn4").click(function(){
    $("#div4").hide();
    $("#div5").show();
})

$("#btn5").click(function(){
    $("#div5").hide();
    $("#div6").show();
})

$("#btn6").click(function(){
    $("#div6").hide();
    $("#div7").show();
})

$("#btn7").click(function(){
    $("#div7").hide();
    $("#div8").show();
})

$("#btn8").click(function(){
    $("#div8").hide();
    $("#div9").show();
})

$("#btn9").click(function(){
    $("#div9").hide();
    $("#div10").show();
})