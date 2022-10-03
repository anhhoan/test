const {expressjwt:jwtValidator }=require('express-jwt')
const jwt=require('jsonwebtoken')
        const ACCESS_TOKEN_SECRET='ACCESS_TOKEN_SECRET'
const verify=jwtValidator({
    secret:ACCESS_TOKEN_SECRET,
    algorithms:['HS256'],
    getToken: function fromHeaderOrQuerystring(req) {
        if (
          req.headers.authorization &&
          req.headers.authorization.split(" ")[0] === "Bearer"
        ) {
          return req.headers.authorization.split(" ")[1];
        } else if (req.query && req.query.token) {
          return req.query.token;
        }
        return null;
}})
const isAdmin = (req,res,next)=>{
    const role=req.auth.tokenData.role
    if(role!='admin'){
        res.send({
            messsages:'l' 
        })
    }
    else{
        return next()
    }
}
 
module.exports={
    verify, isAdmin
}