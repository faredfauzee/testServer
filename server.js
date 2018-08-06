
  var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/listModel'), //created model loading here
  bodyParser = require('body-parser');
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";


  app.get('/listUsers', function (req, res) {
    console.log('listUsers now..');
      MongoClient.connect(url, function(err, db) {
        var dbo = db.db("testMongo");
        if (err) throw err;
// console.log('req : ',req);

        var query = { ans:"2000" };
          dbo.collection("collMongo").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log('listUsers completed : ',result);
            db.close();
          });
    });
});

app.get('/addUsers', function (req, res) {
   // First read existing users.
console.log('add user now..');
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("testMongo");
      if (err) throw err;
          var myobj = { name: "Adib", ans: "8000" };
          dbo.collection("collMongo").insertOne(myobj , function(err, result) {
            if (err) throw err;
            console.log('addUsers completed');
            db.close();
        });

    });
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})







// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000,
//   mongodb = require('mongoose'),
//   Task = require('./api/models/listModel'), //created model loading here
//   bodyParser = require('body-parser');
//
// // mongoose instance connection url connection
// mongodb.Promise = global.Promise;
// mongodb.connect('mongodb://localhost:27017/testMongo');
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// var routes = require('./api/routes/listRoutes'); //importing route
// routes(app); //register the route
//
//
// app.listen(port);
