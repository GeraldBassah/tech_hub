var mysql = require ('mysql');

var con = mysql.createConnection({
   host : '127.0.0.1',
   user: 'root',
   password: '',
   database : 'tech_hub'
});

con.connect(function(err){
    if (err) throw err;
    console.log("database is connected")
});

// variable news queries for the colleges
var COH = "SELECT conews FROM colleges where college_name = 'humanities' ORDER BY postdate";
var COS = "SELECT conews FROM colleges where college_name = 'science' ORDER BY postdate";
var COE = "SELECT conews FROM colleges where college_name = 'engineering' ORDER BY postdate";
var COHS = "SELECT conews FROM colleges where college_name = 'health'  ORDER BY postdate";
var COANR = "SELECT conews FROM colleges where college_name = 'agric' ORDER BY postdate";
var COABE = "SELECT conews FROM colleges where college_name = 'art' ORDER BY postdate";

// variable news queries for halls
var unity = "SELECT hall_news FROM hall WHERE hall_name = 'unity' ORDER BY postdate ";
var indece = "SELECT hall_news FROM hall WHERE hall_name = 'independence' ORDER BY postdate";
var repu = "SELECT hall_news FROM hall WHERE hall_name = 'republic' ORDER BY postdate";
var queens = "SELECT hall_news FROM hall WHERE hall_name = 'queens' ORDER BY postdate";
var africa = "SELECT hall_news FROM hall WHERE hall_name = 'africa' ORDER BY postdate";
var katanga = "SELECT hall_news FROM hall WHERE hall_name = 'university' ORDER BY postdate";

//queries for src
var src = "SELECT src_news FROM src  ORDER BY postdate";

//variable queries for news titles
//college_news_titles variables
var COHt = "SELECT cotitle FROM colleges WHERE college_name='humanities' ORDER BY postdate";
var COSt =  "SELECT cotitle FROM colleges WHERE college_name='science' ORDER BY postdate";
var COEt =  "SELECT cotitle FROM colleges WHERE college_name='engineering' ORDER BY postdate";
var COHSt =  "SELECT cotitle FROM colleges WHERE college_name='health' ORDER BY postdate";
var COANRt =  "SELECT cotitle FROM colleges WHERE college_name='agric' ORDER BY postdate";
var COABEt =  "SELECT cotitle FROM colleges WHERE college_name='art' ORDER BY postdate";

//hall_news title variables
var unityt = "SELECT hall_news_tile FROM hall WHERE hall_name = 'unity' ORDER BY postdate";
var indecet = "SELECT hall_news_tile FROM hall WHERE hall_name = 'indece' ORDER BY postdate";
var reput = "SELECT hall_news_tile FROM hall WHERE hall_name = 'republic' ORDER BY postdate";
var queenst = "SELECT hall_news_tile FROM hall WHERE hall_name = 'queens' ORDER BY postdate";
var africat = "SELECT hall_news_tile FROM hall WHERE hall_name = 'africa' ORDER BY postdate";
var katangat = "SELECT hall_news_tile FROM hall WHERE hall_name = 'unity' ORDER BY postdate";

//src news titles  variables
var srct = "SELECT src_news_title FROM src ORDER BY postdate";


// inserting multiple items into my colleges table

// var records = [
    // ['engineering','Computer Engineering field trip','From the Head of departments office, the computer engineering field trip which was said to be cancelled is now back on.' ],
    // ['health','Dinner Loading','the college dinner sceduled for next week is definetly coming on, students can purchase tickets at '],
    // ['art','Art Festival', 'The college of arts would be hosting its annual arts festival on the 16th of november'],
    // ['agric','Boring??','New courses introduced within the college to draw students attention'],
    // ['humanities','Talk Talk','the following students have been rusticated by the school for disrespecting a lecturer'],
    // ['science','Grind all day','Grind all day, the annual college of science dinner just ended and the leaders of the college would like to thank each person that made it for the dinner, we did indeed grind all day']
// ];

// var insertco = "INSERT INTO colleges(college_name,cotitle,conews)VALUES ?";

//var insertha = "INSERT INTO hall (hall_name,hall_news_tile,hall_news)VALUES ?";

//inserting multiple items into my halls table
/*var halls = [
    ['unity','Conti to become mixed hall','its outrageous says the hall president, the vice chancellor of knust has apparently decided to make the two male traditional halls, mixed'],
    ['independence','Hall week flop','indece hall week flopped with a big bang.'],
    ['republic','Epilogo flop!!', 'With sadness, epilogo fans trooped back to their rooms as it didnt live up to their expecttions'],
    ['queens','Queen of qeens','Epogoro Hudunda has been crowned queen of queens'],
    ['university','Katanga school girls no more','Katangas decision not to celebrate its hall week leaves sad taste in stdents mouths'],
    ['africa','Executives arrested','africa hal executives arrested for embezzling funds']
];*/

//insertion query
 /*con.query(insertha,[halls],function(err,result){
    console.log(result)
 });
*/


// displaying my queries in the console and in node js format, not just msql
//displaying college news
//college of humanities
con.query(COH,function(err,result){
    if (err) throw err;
    console.log(result);
});

//college of science
con.query(COS,function(err,result){
    if (err) throw err;
    console.log(result);
});

//college of engineering
con.query(COE,function(err,result){
    if (err) throw err;
    console.log(result);
});

//college of health
con.query(COHS,function(err,result){
    if (err) throw err;
    console.log(result);
});

//college of agric
con.query(COANR,function(err,result){
    if (err) throw err;
    console.log(result);
});

//college of art
con.query(COABE,function(err,result){
    if (err) throw err;
    console.log(result);
});

//displaying college news titles
//college of humanities
con.query(COHt,function(err,result){
    if (err) throw err;
    console.log(result);
});

//college of science
con.query(COSt,function(err,result){
    if (err) throw err;
    console.log(result);
});

//college of engineering
con.query(COEt,function(err,result){
    if (err) throw err;
    console.log(result);
});

//college of agric
con.query(COANRt,function(err,result){
    if (err) throw err;
    console.log(result);
});

//college of art
con.query(COABEt,function(err,result){
    if (err) throw err;
    console.log(result);
});




//displaying hall news
// unity hall news
con.query(unity,function(err,result){
    if (err) throw err;
    console.log(result);
});

//indece hall news
con.query(indece,function(err,result){
    if (err) throw err;
    console.log(result);
});

//repu hall news
con.query(repu,function(err,result){
    if (err) throw err;
    console.log(result);
});

//queens hall news
con.query(queens,function(err,result){
    if (err) throw err;
    console.log(result);
});

//katanga hall news
con.query(katanga,function(err,result){
    if (err) throw err;
    console.log(result);
});

//africa hall news
con.query(africa,function(err,result){
    if (err) throw err;
    console.log(result);
});

//displaying hall news titles
//unity hall news title
con.query(unityt,function(err,result){
    if (err) throw err;
    console.log(result);
});

//republic hall news title
con.query(reput,function(err,result){
    if (err) throw err;
    console.log(result);
});

//indece hall news title
con.query(indecet,function(err,result){
    if (err) throw err;
    console.log(result);
});

//queens hall news title
con.query(queenst,function(err,result){
    if (err) throw err;
    console.log(result);
});

//africa hall news title
con.query(africat,function(err,result){
    if (err) throw err;
    console.log(result);
});

//katanga hall news title
con.query(katangat,function(err,result){
    if (err) throw err;
    console.log(result);
});

//displaying src news
con.query(src,function(err,result){
    if (err) throw err;
    console.log(result);
});

//displaying src_news title
con.query(srct,function(err,result){
    if (err) throw err;
    console.log(result);
});



con.end();