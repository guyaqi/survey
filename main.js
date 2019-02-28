let surveyForm = {
    age:0,
    FirstLanguage:"",
    dailyLanguage:"",
    startEnglish:0,
    Education:0,
    way:"",
    wayOther:"",
    live:0,
    long:0,
    rate:0,
    reading:"",
    readingOthers:"",
    t:[],
    a:[]
};

function submitSurvey() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "submit.php" ,
        data: surveyForm,
        success: function (result) {
            console.log("submit success!");
            return false;
        },
        error : function() {
            console.error("err");
        }
    });
}



$(function(){

    for(let i=2;i<=41;i++) {
        $("#div"+i.toString()).hide();
    }

    for(let i=1;i<41;i++) {
        $("#btn"+i.toString()).click(function(){
            $("#div"+i.toString()).hide();
            $("#div"+(i+1).toString()).show();
        })
    }

    // form of edu background
    $("#btn3").click(function(){
        surveyForm.age = $("#Age").val();
        FirstLanguage = $("#FirstLang").val();
        dailyLanguage = $("#DailyLang").val();
        startEnglish = $("#StartEng").val();
        
        Education = $(":radio[name='r1']:checked").val()
        $(":checkbox[name='c1']:checked").each(function(){
            way += $(this).val();
        })
        wayOther = $("#WayOther").val();
        live = $(":radio[name='r2']:checked").val()
        long = $(":radio[name='r3']:checked").val()
        rate = $(":radio[name='r4']:checked").val()
        Education = $(":radio[name='r1']:checked").val()
        $(":checkbox[name='c2']:checked").each(function(){
            reading += $(this).val();
        })
        readingOthers = $("#ReadingOther").val();
    })
    
    $("#btn40").click(function(){
        $("#div40").hide();
        $("#div41").show();
        $("#title").text("Thanks");

        submitSurvey();

        // var form = document.createElement("form");
        // form.method = "post";
        // form.action = "submit.php";

        // form.hidden="hidden";
        // form.id = "hiddenForm";
        // document.body.appendChild(form);
        
        // form.target = "rfFrame";
        // form.submit();


    })
})

