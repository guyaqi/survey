<?php

    $age = $_REQUEST['age'];
    $first_lang = $_REQUEST['FirstLanguage'];
    $daily_lang = $_REQUEST['dailyLanguage'];
    $start_english = $_REQUEST['startEnglish']; // can be zero
    if($start_english==null) {
        $start_english = 0;
    }
    $education = $_REQUEST['Education'];

    $way = $_REQUEST['way'];
    $way_other = $_REQUEST['wayOther'];

    $live = $_REQUEST['live'];
    $long = $_REQUEST['long'];
    $rate = $_REQUEST['rate'];

    $reading = $_REQUEST['reading'];
    $reading_others = $_REQUEST['readingOthers'];

    $t = $_REQUEST['t'];
    $a = $_REQUEST['a'];
    for($i=1;$i<6;$i++) {
        if($a[i] == null) {
            $a[i] = 0;
        }
    }

    if(
        $age == null || $first_lang == null ||
        $daily_lang == null || $education == null ||
        $live == null ||$long == null ||$rate == null) {
        die();
    }

    if($way==null && $way_other==null) {
        die();
    }

    if($reading==null && $reading_others==null) {
        die();
    }


    $servername = "localhost";
    $username = "guyaqi";
    $password = "guyaqi5858";
    $dbname = "guyaqi";


    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO `lang_survey` (`age`, `first_lang`, `daily_lang`, `start_english`, `education`, `way`, `way_other`, `live`, `long`, `rate`, `reading`, `reading_others`, ".
        "`t1`, `t2`, `t3`, `t4`, `t5`, `t6`, `t7`, `t8`, `t9`, `t10`, `t11`, `t12`, `t13`, `t14`, `t15`, `t16`, `t17`, `t18`, `a1`, `a2`, `a3`, `a4`, `a5`, `a6`) VALUES ".
        "($age, '$first_lang', '$daily_lang', $start_english, $education, '$way', '$way_other', $live, $long, $rate, '$reading', '$reading_others', ".
        "$t[1], $t[2],$t[3],$t[4],$t[5],$t[6],$t[7],$t[8],$t[9],$t[10],$t[11],$t[12],$t[13],$t[14],$t[15],$t[16],$t[17],$t[18],$a[1],$a[2],$a[3],$a[4],$a[5],$a[6]);";

        $conn->exec($sql);
        $conn = null;
    } catch (PDOException $e) {
        // echo("<br/><b>sql:</b>$sql <br/><br/>");
        
        echo $e->getMessage();
    }
    
?>