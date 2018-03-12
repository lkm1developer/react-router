const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()
var db=require ('./server/db.js')
//db.CreateDb();
//db.CarTable();
//db.InsertCar();
//db.InsertCars();

// serve static assets normally
app.use(express.static(__dirname + '/public'))


// Handles all routes so you do not get a not found error

app.get('/api/hello', (req, res) => {

    res.send({ express: 'Hello From Express' });
  });

app.get('/api/:tagId', (req, res) => {
    res.send('id: ' + req.params.tagId);
    //res.send({ express: 'Hello From Express' });
  });


app.get('/getallcars', (req, res) => {
   db.GetAllCars(req, function(error, result){    
    res.send({status:true,cars:result});    
  });
});

app.get('/getcar/:carid', (req, res) => {
    db.GetCar(req.params.carid, function(error, result){    
    res.send({status:true,cars:result});    
   });
});
app.get('/getcar/*', (req, res) => {
    db.GetCar(req.params.carid, function(error, result){    
    res.send({status:true,cars:result});    
   });
});





app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)