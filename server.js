var express=require('express');
var app=express();
app.use(express.static(__dirname));
//підключаєм модуль body-parser і інтегруєм в express
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//var UsersCourse=require('./userscourse');

app.get('/',function(req,res){
  res.sendFile(__dirname+'/main.html');
})

/*
app.get('/loadData',function(req,res){
  UsersCourse.find(function(err,data){
    console.log(data);
    res.send(data);
  })
})


app.post('/adduser',function(req,res){
  console.log("req.body:");
  console.log(req.body);
  var user=new UsersCourse(req.body);
  user.save(function(err,data){
    console.log("data:");
    console.log(data);
    res.send(data);
  })
})

app.post('/deleteuser',function(req,res){
  console.log("req.body:");
  console.log(req.body);
  UsersCourse.remove({_id:req.body.id},function(err,data){
    console.log(data);
    res.send("delete user!");
  })
})

app.post('/addcourse',function(req,res){
  console.log("addcourse - req.body:");
  console.log(req.body);
  var course=req.body.course;
  UsersCourse.update({_id:req.body.id},{$push:{courses:course}},function(err,data){
    console.log(data);
    res.send("add course!");
  })
})

app.post('/checkcourse',function(req,res){
  console.log('checkcourse:');
  var course=req.body.course;
  UsersCourse.update({_id:req.body.id,'courses.name':course.name},
                     {$set:{'courses.$.bool':course.bool}},
    function(err,data){
      console.log(data);
      res.send('check click');
    })
})

app.post('/deletecourse',function(req,res){
  console.log("req.body-deletecourse:")
  console.log(req.body);
  var course=req.body.course;
  console.log("course:");
  console.log(course);
  UsersCourse.update({_id:req.body.id},{$pull:{courses:course}},function(err,data){
   // console.log(data);
    res.send("delete course");
  })
})
*/

app.listen(8080);
console.log('run server!');
