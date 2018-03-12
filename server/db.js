var methods = {};
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var ObjectId = require('mongodb').ObjectID;
methods.CreateDb=function(){
      

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
      });
};


// ==================================================================================
methods.CarTable=function (){
    

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.createCollection("cars", function(err, res) {
          if (err) throw err;
          console.log("Collection created!");
          db.close();
        });
  }); 
} 


// ==================================================================================
methods.InsertCar=function(){
  

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myobj = { 
        name: "lakhvinder",
        year: "2018",
        make:'make',
        model:'model',
        price:'222222',
        media:'http://localhost:5000/img/team-2.jpg'
       };
      dbo.collection("cars").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("car inserted");
        db.close();
      });
    }); 
}



// ==================================================================================
methods.InsertCars=function(){
  

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myobj = [
        {
          id: 1,
          name: 'Honda Accord Crosstour',
          year: '2010',
          model: 'Accord Crosstour',
          make: 'Honda',
          media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
          price: '$16,811'
  
      },
      {
          id: 2,
          name: 'Mercedes-Benz AMG GT Coupe',
          year: '2016',
          model: 'AMG',
          make: 'Mercedes Benz',
          media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
          price: '$138,157'
  
      },
      {
          id: 3,
          name: 'BMW X6 SUV',
          year: '2016',
          model: 'X6',
          make: 'BMW',
          media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
          price: '$68,999'
      },
      {
          id: 4,
          name: 'Ford Edge SUV',
          year: '2016',
          model: 'Edge',
          make: 'Ford',
          media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
          price: '$36,275'
      },
      {
          id: 5,
          name: 'Dodge Viper Coupe',
          year: '2017',
          model: 'Viper',
          make: 'Dodge',
          media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
          price: '$123,890'
      }
      ];
      dbo.collection("cars").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
     
       
        db.close();
      });
    }); 
}

//===================================================================================
methods.GetAllCars= function(req, callback){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("cars").find({}).toArray(function(err, result) {
      if (err) throw err;
      //console.log(result);
      
      db.close();
      callback(null,result);
    });
  }); 
}
methods.GetCar= function(req, callback){
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("cars").find({'_id':ObjectId(req)},{}).toArray(function(err, result) {
      if (err) throw err;
      //console.log('carid'+req);
      
      db.close();
      callback(null,result);
    });
  }); 
}
module.exports = methods;
