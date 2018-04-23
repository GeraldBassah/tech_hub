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

//get humanities news
router.get('/humanities', function(req, res, next) {
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
            conn.query("select college_name,cotitle,conews from colleges where college_name = 'humanities' order by postdate", function(err, rows, fields) {
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

//get science news
router.get('/science', function(req, res, next) {
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
                conn.query("select college_name,cotitle,conews from colleges where college_name = 'science' order by postdate", function(err, rows, fields) {
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

router.get('/health', function(req, res, next) {
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
                conn.query("select college_name,cotitle,conews from colleges where college_name = 'health' order by postdate", function(err, rows, fields) {
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


//get engineering news
router.get('/engineering', function(req, res, next) {
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
                conn.query("select college_name,cotitle,conews from colleges where college_name = 'engineering' order by postdate", function(err, rows, fields) {
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


//get agric news
router.get('/agric', function(req, res, next) {
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
                conn.query("select college_name,cotitle,conews from colleges where college_name = 'agric' order by postdate", function(err, rows, fields) {
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


//get art news
router.get('/art', function(req, res, next) {
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
                conn.query("select college_name,cotitle,conews from colleges where college_name = 'art' order by postdate", function(err, rows, fields) {
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

 // get unity hall news
router.get('/unity', function(req, res, next) {
    try {
        /*var roleId = req.param('roleId');
          var deptId = req.param('deptId');*/
        var query = url.parse(req.url,true).query;
        console.log(query);
        var hall_news_title = query.hall_news_title;
        var hall_news = query.hall_news
        console.log(hall_news);
        console.log(hall_news_title);
        //console.log(college_news);

        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query("select hall_news_title,hall_news FROM hall WHERE hall_name = 'unity' order by hall_postdate", function(err, rows, fields) {
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

//get indece hall news
router.get('/indece', function(req, res, next) {
    try {
        /*var roleId = req.param('roleId');
          var deptId = req.param('deptId');*/
        var query = url.parse(req.url,true).query;
        console.log(query);
        var hall_news_title = query.hall_news_title;
        var hall_news = query.hall_news
        console.log(hall_news);
        console.log(hall_news_title);
        //console.log(college_news);

        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query("select hall_news_title,hall_news FROM hall WHERE hall_name = 'independence' order by hall_postdate", function(err, rows, fields) {
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

//get repu news
router.get('/repu', function(req, res, next) {
    try {
        /*var roleId = req.param('roleId');
          var deptId = req.param('deptId');*/
        var query = url.parse(req.url,true).query;
        console.log(query);
        var hall_news_title = query.hall_news_title;
        var hall_news = query.hall_news
        console.log(hall_news);
        console.log(hall_news_title);
        //console.log(college_news);

        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query("select hall_news_title,hall_news FROM hall WHERE hall_name = 'republic' order by hall_postdate", function(err, rows, fields) {
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

//queens hall news
router.get('/queens', function(req, res, next) {
    try {
        /*var roleId = req.param('roleId');
          var deptId = req.param('deptId');*/
        var query = url.parse(req.url,true).query;
        console.log(query);
        var hall_news_title = query.hall_news_title;
        var hall_news = query.hall_news
        console.log(hall_news);
        console.log(hall_news_title);
        //console.log(college_news);

        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query("select hall_news_title,hall_news FROM hall WHERE hall_name = 'queens' order by hall_postdate", function(err, rows, fields) {
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


//africa hall news
router.get('/africa', function(req, res, next) {
    try {
        /*var roleId = req.param('roleId');
          var deptId = req.param('deptId');*/
        var query = url.parse(req.url,true).query;
        console.log(query);
        var hall_news_title = query.hall_news_title;
        var hall_news = query.hall_news
        console.log(hall_news);
        console.log(hall_news_title);
        //console.log(college_news);

        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query("select hall_news_title,hall_news FROM hall WHERE hall_name = 'independence' order by hall_postdate", function(err, rows, fields) {
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


//katanga hall news
router.get('/katanga', function(req, res, next) {
    try {
        /*var roleId = req.param('roleId');
          var deptId = req.param('deptId');*/
        var query = url.parse(req.url,true).query;
        console.log(query);
        var hall_news_title = query.hall_news_title;
        var hall_news = query.hall_news
        console.log(hall_news);
        console.log(hall_news_title);
        //console.log(college_news);

        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query("select hall_news_title,hall_news FROM hall WHERE hall_name = 'university' order by hall_postdate", function(err, rows, fields) {
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

//get src news
router.get('/src', function(req, res, next) {
    try {
        /*var roleId = req.param('roleId');
          var deptId = req.param('deptId');*/
        var query = url.parse(req.url,true).query;
        console.log(query);
        var src_news = query.src_news;
        var src_news_title = query.src_news_title;
        console.log(src_news);
        console.log(src_news_title);
        //console.log(college_news);

        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query("select src_news_title,src_news FROM src order by src_postdate", function(err, rows, fields) {
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