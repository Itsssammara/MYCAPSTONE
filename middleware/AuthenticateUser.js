import {config} from "dotenv"
config()
import jwt from "jsonwebtoken"

function createToken(user) {
    return jwt.sign({
        emailAdd:user.emailAdd,
        userPass:user.userPass
    },
    process.env.JWT_SECRET,
    {
        expiresIn: '1h'
    }
    )
}
function verifyToken(req,res,next) {
    //retrieve a token from the browser
   const token=req?.headers['authorization']
if(token){
    if(jwt.verify(token,process.env.JWT_SECRET)){
        next()
}else{
    res?.json({
        status:res.statusCode,
        msg:"please provide the correct credentials"
    })
}
}
}
export{
    createToken,verifyToken
}