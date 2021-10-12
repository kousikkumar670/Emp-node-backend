const express=require('express');

//For routing purpose
const router=express.Router();
var data=require('../datasource.js');
 var constants=require('../shared/common.js');


//get all data
router.get("/",(req,res)=>{
    let response=constants.api_response;
    try{
    data.getData(null,function(err,data){
        response.status=constants.SUCCESS;
        response.data=data;
        res.send(response)
    });
    }catch(err){
        response.status=constants.FAILURE;
        response.data=err.message;
        res.send(response)
    }
    
})
//get Data by id
router.get("/:id",(req,res)=>{
    let response=constants.api_response;
    try{
        var id=req.params.id;
        data.getDataById(null,id,function(err,data){
            response.status=constants.SUCCESS;
            response.data=data;
            res.send(response)
    });
       
    }catch(err){
        response.status=constants.FAILURE;
        response.data=err.message;
        res.send(response)
    }
    
})
//Insert new row in a table
router.post("/",(req,res)=>{
    var params=req.body;
    let response=constants.api_response;
    try{
        data.insertData(null,params,function(err,data){
                response.status==constants.SUCCESS;
                response.data=data;
                res.send(response);
        })
    }catch(err){
        response.status=constants.FAILURE;
        response.data=err.message;
        res.send(response)
    }
});

//update row in a table
router.put("/",async(req,res)=>{
    var params=req.body;
    let response=constants.api_response;
    try{
        await data.updateData(null,params,function(err,data){
        console.log(params)
            response.status==constants.SUCCESS;
            response.data=data;
            res.send(response);
    })
    }catch(err){
    response.status=constants.FAILURE;
    response.data=err.message;
    res.send(response)
}
});
//delete row in a table
router.delete("/",async(req,res)=>{
    var params=req.body;
    let response=constants.api_response;
    try{
        await data.deleteData(null,params,function(err,data){
        console.log(params)
            response.status==constants.SUCCESS;
            response.data=data;
            res.send(response);
    })
    }catch(err){
    response.status=constants.FAILURE;
    response.data=err.message;
    res.send(response)
}
});



module.exports=router 