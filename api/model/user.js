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
         }
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
}
module.exports = users