/*

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
}

*/

/* assuming that the name of DATABASE is "forms" */

CREATE TABLE IF NOT EXISTS `lang_survey`(
   `id` INT AUTO_INCREMENT,
   `age` INT NOT NULL,
   `first_lang` VARCHAR(64) NOT NULL,
   `daily_lang` VARCHAR(64) NOT NULL,

   `start_english` INT NOT NULL,
   `education` INT NOT NULL,
   `way` VARCHAR(64),
   `way_other` VARCHAR(255),
   `live` INT NOT NULL,
   `long` INT NOT NULL,
   `rate` INT NOT NULL,
   `reading` VARCHAR(64),
   `reading_others` VARCHAR(255),
   `t1` INT NOT NULL,
   `t2` INT NOT NULL,
   `t3` INT NOT NULL,
   `t4` INT NOT NULL,
   `t5` INT NOT NULL,
   `t6` INT NOT NULL,
   `t7` INT NOT NULL,
   `t8` INT NOT NULL,
   `t9` INT NOT NULL,
   `t10` INT NOT NULL,
   `t11` INT NOT NULL,
   `t12` INT NOT NULL,
   `t13` INT NOT NULL,
   `t14` INT NOT NULL,
   `t15` INT NOT NULL,
   `t16` INT NOT NULL,
   `t17` INT NOT NULL,
   `t18` INT NOT NULL,
   `a1` FLOAT NOT NULL,
   `a2` FLOAT NOT NULL,
   `a3` FLOAT NOT NULL,
   `a4` FLOAT NOT NULL,
   `a5` FLOAT NOT NULL,
   `a6` FLOAT NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB CHARSET=utf8;