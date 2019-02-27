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
    // for(let i=2;i<=41;i++) {
    //     $("#div"+i.toString()).hide();
    // }

    for(let i=1;i<41;i++) {
        $("#btn"+i.toString()).click(function(){
            $("#div"+i.toString()).hide();
            $("#div"+(i+1).toString()).show();
        })
    }
    
    $("#btn40").click(function(){
        $("#div40").hide();
        $("#div41").show();
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

