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
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;