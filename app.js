const express=require('express');
const app=express();

var constants=require('./shared/common.js');


//db connection
var data=require('./datasource');
app.use(express.json())



//routing
const empRouter=require("./routes/emp");
app.use('/emp',empRouter);
app.use('/emp/:id',empRouter);



app.listen(8080,function(){
    console.log("Server started");
});
