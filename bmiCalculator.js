const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(req,res){
  console.log("Server(BMI) started at 3000");
});

app.get("/", function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/", function(req,res){

  var height=Number(req.body.height);
  var weight=Number(req.body.weight);

  var result= weight/Math.pow(height,2);
  res.send("BMI: "+result);

});
