var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* Creating a news entry. */
router.post('/insertnews', function(req,res,next){
    try{
        var newsInfo = req.body;
        console.log(newsInfo);
        req.getConnection(function(err, conn){
            if(err)
            {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else
            {
                var insertSql = "INSERT INTO src SET ?";
                var insertValues = {
                    "src_news_title" : newsInfo.src_news_title,
                    "src_news" : newsInfo.src_news,
                   // "newstype" : newsInfo.newstype
                };
                //sql query
                var query = conn.query(insertSql, insertValues, function (err, result){
                    if(err){
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var src_id = result.insertId;
                    res.json({"src_id":src_id});
                });
            }
        });
    }
    catch(ex){
        console.error("Internal error:"+ex);
        return next(ex);
    }
});


/* Get news service. */
router.get('/newsdetails', function(req, res, next) {
    try {
        /*var roleId = req.param('roleId');
          var deptId = req.param('deptId');*/
        var query = url.parse(req.url,true).query;
        console.log(query);
        var college_name = query.college_name;
        var cotitle = query.cotitle;
        var college_news = query.college_news
        console.log(college_name);
        console.log(cotitle);
        console.log(college_news);

        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('select college_name,cotitle,conews from colleges order by postdate', function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var newsIndex in rows) {
                        var newsObj = rows[newsIndex];
                        resEmp.push(newsObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});
