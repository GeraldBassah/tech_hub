var mysql = require ('mysql');

var con = mysql.createConnection({
    host :'sql2.freemysqlhosting.net',
    user: 'sql2232698',
    password: 'vS2%jZ6*',
    database : 'sql2232698'
});

con.connect(function(err){
    if (err) throw err;
    console.log("database is connected")
});

// creating tables within my online database

/*
var table= "CREATE TABLE colleges(college_ID INT AUTO_INCREMENT NOT NULL,college_name VARCHAR(45),cotitle VARCHAR(255), conews TEXT, postdate TIMESTAMP,PRIMARY KEY(college_ID))";
con.query(table,function(err,result){
    if (err) throw err;
    console.log(result)
});*/

/*
var src = "CREATE TABLE src(src_ID INT NOT NULL AUTO_INCREMENT,src_news_title VARCHAR(255),src_news TEXT,src_postdate TIMESTAMP,PRIMARY KEY(src_ID))";
con.query(src,function(err,result){
    if (err) throw err;
    console.log(result)
});
*/


/*var hall = "CREATE TABLE hall(hall_ID INT NOT NULL AUTO_INCREMENT,hall_name VARCHAR(20),hall_news_title VARCHAR(255),hall_news TEXT,hall_postdate TIMESTAMP,PRIMARY KEY(hall_ID))";
con.query(hall,function(err,result){
    if (err) throw err;
    console.log(result);
});*/


//inserting values into my online database

// inserting multiple items into my colleges table

 /*var college = [
 ['engineering','Computer Engineering field trip','From the Head of departments office, the computer engineering field trip which was said to be cancelled is now back on.' ],
 ['health','Dinner Loading','the college dinner sceduled for next week is definetly coming on, students can purchase tickets at '],
 ['art','Art Festival', 'The college of arts would be hosting its annual arts festival on the 16th of november'],
 ['agric','Boring??','New courses introduced within the college to draw students attention'],
 ['humanities','Talk Talk','the following students have been rusticated by the school for disrespecting a lecturer'],
 ['science','Grind all day','Grind all day, the annual college of science dinner just ended and the leaders of the college would like to thank each person that made it for the dinner, we did indeed grind all day']
 ];

 var insertco = "INSERT INTO colleges(college_name,cotitle,conews)VALUES ?";
*/
/*var insertha = "INSERT INTO hall (hall_name,hall_news_title,hall_news)VALUES ?";

//inserting multiple items into my halls table
var halls = [
    ['unity','Conti to become mixed hall','its outrageous says the hall president, the vice chancellor of knust has apparently decided to make the two male traditional halls, mixed'],
    ['independence','Hall week flop','indece hall week flopped with a big bang.'],
    ['republic','Epilogo flop!!', 'With sadness, epilogo fans trooped back to their rooms as it didnt live up to their expecttions'],
    ['queens','Queen of qeens','Epogoro Hudunda has been crowned queen of queens'],
    ['university','Katanga school girls no more','Katangas decision not to celebrate its hall week leaves sad taste in stdents mouths'],
    ['africa','Executives arrested','africa hal executives arrested for embezzling funds']
];*/

//insertion query
/*
con.query(insertco,[college],function(err,result){
    if (err) throw err;
   console.log(result)
});
*/

/*con.query(insertha,[halls],function(err,result){
    if (err) throw err;
    console.log(result)
});*/


/*var insertsrc = "INSERT INTO src (src_news_title,src_news)VALUES ?"

var src = [
    ['Src supporting Kelvin Sah?','Word reaching the hub is that the src is pushing Kelvin forward towards the presidency and are pooling resources in aid of the gentleman'],
    ['Elections!!','The src elections to usher in the new batch of executives commences in the dot dot dot of this year, of course anticipation is definitely high '],
    ['Not Recommended','Such was the brand that followed the unfortunate duo who flopped in this years src vetting, Bobby Mensah and another gentlemen whose name has escaped us ,just like his policies, said goodbye to the presidency, hoping that the crwon would fit a better head than theirs. ']
];

con.query(insertsrc,[src],function(err,result){
    if (err) throw err;
    console.log(result);
});*/
