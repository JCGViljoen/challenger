const db = require("../config")
class users{
    fetchUsers(req,res){
        const query =`
        select userID,firstName,lastName,gender,userDOB,emailAdd,profileURL
        from users;
        `
        db.query(query,(err,results)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    fetchUser(req,res){
        const query =`
        select userID,firstName,lastName,gender,userDOB,emailAdd,profileURL
        from users where userID = ${req.params.id};`
        db.query(query,(err,result)=>{
            if (err) throw errres.json({
                status:res.statusCode,result
            })
        })
         }
         updateUser(req,res){
            const query =`
            update users
            set?
            where userID =?`
            db.query(query,
                [req.body,req.params.id],
                (err)=>{
                    if (err)throw err
                    res.json({
                        staus:res.statusCode,
                        msg:"The user has been updated:heart_eyes:"
                    })
                })
         }git 
         deleteUser(req,res){
            const query=`
            delete from users
            where userID =${req.params.id};
            `
            db.query(query,(err)=>{
                if (err)throw err
                res.json({
                    status:res.statusCode,
                    msg:"The user has been updated:heart_eyes::kissing_heart:"
                })
            })
         }
         login(req, res) {
            const {emailAdd, userPass} = req.body
            // query
            const query = `
            SELECT firstName, lastName,
            gender, userDOB, emailAdd, userPass,
            profileUrl
            FROM Users
            WHERE emailAdd = ${emailAdd};
            `
            db.query(query, async (err, result)=>{
                if(err) throw err
                if(!result?.length){
                    res.json({
                        status: res.statusCode,
                        msg: "You provided a wrong email."
                    })
                }else {
                    compare(userPass,
                        result[0].userPass,
                        (cErr, cResult)=>{
                            if(cErr) throw cErr
                            // Create a token
                            const token =
                            createToken({
                                emailAdd,
                                userPass
                            })
                            // Save a token
                            res.cookie("LegitUser",
                            token, {
                                maxAge: 3600000,
                                httpOnly: true
                            })
                            if(cResult) {
                                res.json({
                                    msg: "Logged in",
                                    token,
                                    result: result[0]
                                })
                            }else {
                                res.json({
                                    status: res.statusCode,
                                    msg:
                                    "Invalid password or you have not registered"
                                })
                            }
                        })
                }
            })
        }
}
module.exports = users