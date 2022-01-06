
var mysql = require('mysql');

//..............connection with MYSQL............................//

var con = mysql.createConnection({
    host:"localhost",
    user:"========user name===========", // user name
    password:"=======password=========", // password
    database:"student"
});

//.................hot get data on sql.......................//
con.connect((error) =>{
         
     if(error)
     {
         throw error;
     }

     else{
         con.query("select * from personal",(error,result) =>{
             if(error)
             {
                 throw error;
             }

             else{
                 //whole data show karovo hoi to
                 console.log("your data is here..!:",result);
                 //only one document print karavi hoi to
                 console.log("your one document here..!:",result[1]);
                 //only one value print karavi hoi to
                 console.log("your name is here..!:",result[3].name);
                
             }
         })
     }
});
