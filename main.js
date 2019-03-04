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
    t:[null],
    a:[null]
}

const answer = [null,
    [null,4,1,3],
    [null,3,1,3],
    [null,1,2,3],
    [null,3,4,2],
    [null,2,4,1],
    [null,3,2,4]
]

function submitSurvey() {
    $.ajax({
        url: "submit.php" ,
        data: surveyForm,
        success: function(data, textStatus, jqXHR){
            console.log('success')
        },
        error: function(xmlHttpRequest) {
            console.error('error')
        }
    })
}


$(function(){

    // hide other divs
    for(let i=2;i<=41;i++) {
        $("#div"+i.toString()).hide()
    }

    for(let i=1;i<=40;i++) {
        $("#btn"+i.toString()).click(function(){
            // rc psg[1~6]
            if(i>=15 && i<=40 && i%5==0) {
                let psg = parseInt(i/5) - 2
                let v = []
                let sum = 0

                for(let j=1;j<=3;j++) {
                    v[j] = $(":radio[name='rc"+psg.toString()+j.toString()+"']:checked").val()
                }
                
                for(let j=1;j<=3;j++) {
                    if(v[j]==null) {
                        alert("Please complete the questions.")
                        return false;
                    }
                }

                for(let j=1;j<=3;j++) {
                    if(v[j]==answer[psg][j]) {
                        sum += 1
                    }
                }
                
                surveyForm.a[psg] = sum/3
            }

            // form of edu background
            if(i==3) {
                // unfinished check null
                surveyForm.age = $("#Age").val();
                surveyForm.FirstLanguage = $("#FirstLang").val();
                surveyForm.dailyLanguage = $("#DailyLang").val();
                surveyForm.startEnglish = $("#StartEng").val();
                
                surveyForm.Education = $(":radio[name='r1']:checked").val()
                $(":checkbox[name='c1']:checked").each(function(){
                    surveyForm.way += $(this).val();
                })
                surveyForm.wayOther = $("#WayOther").val();
                surveyForm.live = $(":radio[name='r2']:checked").val()
                surveyForm.long = $(":radio[name='r3']:checked").val()
                surveyForm.rate = $(":radio[name='r4']:checked").val()
                $(":checkbox[name='c2']:checked").each(function(){
                    surveyForm.reading += $(this).val();
                })
                surveyForm.readingOthers = $("#ReadingOther").val();

                if(
                    surveyForm.age == "" ||
                    surveyForm.FirstLanguage == "" ||
                    surveyForm.dailyLanguage == "" ||
                    surveyForm.startEnglish == "" ||
                    surveyForm.Education == "" ||
                    surveyForm.live == "" ||
                    surveyForm.long == "" ||
                    surveyForm.rate == "" ||
                    (surveyForm.way == "" && surveyForm.wayOther == "")||
                    (surveyForm.reading == "" && surveyForm.readingOthers == "")
                    ) {
                    alert("Please complete the form.")
                    return false;
                }
            }

            // next div
            $("#div"+i.toString()).hide();
            $("#div"+(i+1).toString()).show();
        })
    }

    // rc psg[i]
    for(let i=1;i<=6;i++) {
        $("#btn"+(10+i*5).toString()).click(function(){
            
        })
    }


    // form of edu background

    // clock psg1
    $("#btn11").click(function(){
        surveyForm.t[1] = new Date().getTime();
    })

    $("#btn12").click(function(){
        surveyForm.t[1] = new Date().getTime() - surveyForm.t[1];
        surveyForm.t[2] = new Date().getTime();
    })

    $("#btn13").click(function(){
        surveyForm.t[2] = new Date().getTime() - surveyForm.t[2];
        surveyForm.t[3] = new Date().getTime();
    })

    $("#btn14").click(function(){
        surveyForm.t[3] = new Date().getTime() - surveyForm.t[3];
    })

    // clock psg2
    $("#btn16").click(function(){
        surveyForm.t[4] = new Date().getTime();
    })

    $("#btn17").click(function(){
        surveyForm.t[4] = new Date().getTime() - surveyForm.t[4];
        surveyForm.t[5] = new Date().getTime();
    })

    $("#btn18").click(function(){
        surveyForm.t[5] = new Date().getTime() - surveyForm.t[5];
        surveyForm.t[6] = new Date().getTime();
    })

    $("#btn19").click(function(){
        surveyForm.t[6] = new Date().getTime() - surveyForm.t[6];
    })


    // clock psg3

    $("#btn21").click(function(){
        surveyForm.t[7] = new Date().getTime();
    })

    $("#btn22").click(function(){
        surveyForm.t[7] = new Date().getTime() - surveyForm.t[7];
        surveyForm.t[8] = new Date().getTime();
    })

    $("#btn23").click(function(){
        surveyForm.t[8] = new Date().getTime() - surveyForm.t[8];
        surveyForm.t[9] = new Date().getTime();
    })

    $("#btn24").click(function(){
        surveyForm.t[9] = new Date().getTime() - surveyForm.t[9];
    })


    // clock psg4

    $("#btn26").click(function(){
        surveyForm.t[10] = new Date().getTime();
    })

    $("#btn27").click(function(){
        surveyForm.t[10] = new Date().getTime() - surveyForm.t[10];
        surveyForm.t[11] = new Date().getTime();
    })

    $("#btn28").click(function(){
        surveyForm.t[11] = new Date().getTime() - surveyForm.t[11];
        surveyForm.t[12] = new Date().getTime();
    })

    $("#btn29").click(function(){
        surveyForm.t[12] = new Date().getTime() - surveyForm.t[12];
    })


    // clock psg5

    $("#btn31").click(function(){
        surveyForm.t[13] = new Date().getTime();
    })

    $("#btn32").click(function(){
        surveyForm.t[13] = new Date().getTime() - surveyForm.t[13];
        surveyForm.t[14] = new Date().getTime();
    })

    $("#btn33").click(function(){
        surveyForm.t[14] = new Date().getTime() - surveyForm.t[14];
        surveyForm.t[15] = new Date().getTime();
    })

    $("#btn34").click(function(){
        surveyForm.t[15] = new Date().getTime() - surveyForm.t[15];
    })


    // clock psg6

    $("#btn36").click(function(){
        surveyForm.t[16] = new Date().getTime();
    })

    $("#btn37").click(function(){
        surveyForm.t[16] = new Date().getTime() - surveyForm.t[16];
        surveyForm.t[17] = new Date().getTime();
    })

    $("#btn38").click(function(){
        surveyForm.t[17] = new Date().getTime() - surveyForm.t[17];
        surveyForm.t[18] = new Date().getTime();
    })

    $("#btn39").click(function(){
        surveyForm.t[18] = new Date().getTime() - surveyForm.t[18];
    })

    
    $("#btn40").click(function(){
        $("#div40").hide();
        $("#div41").show();
        $("#title").text("Thanks");

        submitSurvey();
    })
})

