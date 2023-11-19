const connection =require('../config/database')

const getHomepage =(req,res)=>{
    // let users=[];
    // connection.query(
    //     'SELECT * FROM Users u;',
    //     function(err, results, fields) {
    //         users=results
    //         console.log(results); // results contains rows returned by server
    //         console.log("check user: ",users)
    //         res.send(JSON.stringify(users))
    //     }
    // );

    return res.render('home.ejs')
}
const check=(req,res)=> {
    res.render('sample.ejs')
}
const hello=(req,res)=> {
    res.send('hello node js')
}
const login=(req,res)=>{
    return res.render('login.ejs')
}
const postCreateUser=(req,res)=>{
    // console.log("req.body: ",req.body)
    let email = req.body.email
    let name =req.body.user
    let password=req.body.password

    connection.query(
        `INSERT INTO Users(email,name,password)
        VALUES ( ?,?,?)`,
        [email,name,password],
        function(err,results){
            console.log(results);
            return res.send('created')
        }
    )
}


const userList=(req,res)=>{
    let users=[];
    connection.query(
        'SELECT * FROM Users;',
        function(err, results, fields) {
            users=results
            // console.log(results); // results contains rows returned by server
            // console.log("check user: ",users)
            res.render('userList.ejs',{userList:users})
        }
    );
    // try{
    //     let [results,fields]= await connection.query(`SELECT * FROM Users u`)
    //     // let [results,field]= await connection.query(`SELECT * FROM Users`);
    //     console.log(">> ",results)
    //     return res.render("userList.ejs",{userList:results})
    //     // res.render("userList.ejs")
    // }
    // catch(error){}
}
const updateUser= (req,res)=>{
    const userId=req.params.id
    connection.query(
        'SELECT * FROM Users WHERE id=?;',[userId],
        function(err, results, fields) {
            console.log(">> update result: ",results)
            let check =results && results.length>0 ? results[0]:{};
            res.render('update.ejs',{user:check})
        }    
    )
    // console.log(req.params.id)
    
}
const putUpdateUser=(req,res)=>{
    console.log("req.body: ",req.body)
    let email = req.body.email
    let name =req.body.name
    let password=req.body.password
    let userId=req.body.id

    console.log("req.body: ",email,name,password,userId)


    connection.query(
        `UPDATE Users 
        SET email=?,name= ?, password=? 
        WHERE id=?;
        `,
        [email,name,password,userId],
        function(err,results){
            console.log(results);
        }
    )
    res.send("updated")
}
module.exports={
    getHomepage,check,hello,login,postCreateUser,userList,updateUser,putUpdateUser
}
