const {sign,verify}=require('jsonwebtoken')
require('dotenv').config

function createToken(user){
    return sign({
        emailAdd:user.emailAd,
        userPass:user.userPass
    },process.env.SECRET_KEY,
    {
        expiresIn:'1h'
    }
    )
}
module.exports={
    createToken
}
// function verifyAtoken(req,res,next){
//     const token =req.header['authorization']

// }