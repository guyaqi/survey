function login() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "submit.php" ,
        data: $('#hiddenForm').serialize(),
        success: function (result) {
            console.log("Hello");
            return false;
        },
        error : function() {
            console.error("err");
        }
    });
}



$(function(){
    // hide all container exclude div1
    for(let i=2;i<=13;i++) {
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
        $("#title").text("Reading Comprehension");
    })

    $("#btn10").click(function(){
        $("#div10").hide();
        $("#div11").show();
        $("#title").text("Reading Comprehension");
    })

    $("#btn11").click(function(){
        $("#div11").hide();
        $("#div12").show();
        $("#title").text("Reading Comprehension");
    })
    
    $("#btn12").click(function(){
        $("#div12").hide();
        $("#div13").show();
        $("#title").text("Thanks");

        var form = document.createElement("form");
        form.method = "post";
        form.action = "submit.php";

        var nameInput = document.createElement("input");
        nameInput.setAttribute("name", "Name");
        nameInput.setAttribute("value", $("#Name").val());
        form.appendChild(nameInput);

        var ageInput = document.createElement("input");
        ageInput.setAttribute("name", "Age");
        ageInput.setAttribute("value", $("#Age").val());
        form.appendChild(ageInput);

        var eduInput = document.createElement("input");
        eduInput.setAttribute("name", "Education");
        eduInput.setAttribute("value", $("#Education").val());
        form.appendChild(eduInput);

        var langInput = document.createElement("input");
        langInput.setAttribute("name", "Language");
        langInput.setAttribute("value", $("#Language").val());
        form.appendChild(langInput);

        var flangInput = document.createElement("input");
        flangInput.setAttribute("name", "FirstLanguage");
        flangInput.setAttribute("value", $("#FirstLanguage").val());
        form.appendChild(flangInput);

        var ltInput = document.createElement("input");
        ltInput.setAttribute("name", "LearntTime");
        ltInput.setAttribute("value", $("#LearntTime").val());
        form.appendChild(ltInput);

        form.hidden="hidden";
        form.id = "hiddenForm";
        document.body.appendChild(form);
        
        form.target = "rfFrame";
        form.submit();
        // login();

    })
})

