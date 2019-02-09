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

$(function(){
    // hide all container exclude div1
    for(var i=2;i<=10;i++) {
        $("#div"+i.toString()).hide();
    }

    $("#btn1").click(function(){
        $("#div1").hide();
        $("#div2").show();
        $("#title").text("Education background");
    })
    
    $("#btn2").click(function(){
        $("#div2").hide();
        $("#div3").show();
        $("#title").text("Reading");
    })
    
    $("#btn3").click(function(){
        $("#div3").hide();
        $("#div4").show();
        $("#title").text("Reading");
    })
    
    $("#btn4").click(function(){
        $("#div4").hide();
        $("#div5").show();
        $("#title").text("Reading");
    })
    
    $("#btn5").click(function(){
        $("#div5").hide();
        $("#div6").show();
        $("#title").text("Reading");
    })
    
    $("#btn6").click(function(){
        $("#div6").hide();
        $("#div7").show();
        $("#title").text("Reading");
    })
    
    $("#btn7").click(function(){
        $("#div7").hide();
        $("#div8").show();
        $("#title").text("Reading Comprehension");
    })
    
    $("#btn8").click(function(){
        $("#div8").hide();
        $("#div9").show();
        $("#title").text("Reading Comprehension");
    })
    
    $("#btn9").click(function(){
        $("#div9").hide();
        $("#div10").show();
        $("#title").text("Thanks");
    })
})

