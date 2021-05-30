function errorHandler(error,req,res,next){
    if(error.name==="Unauthorized error"){
        return res.status(401).json({message:"user is not authorized"});
    }
    if(error.name=="Validation error"){
        return res.status(401).json({message:error})
    }
    return res.status(500).json({message:error})
}
module.exports=errorHandler;