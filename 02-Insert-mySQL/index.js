var mysql = require('mysql');
var connected = mysql.createConnection({
    host:"=========host name==========",
    user:"=========user name========",
    password:"=======password======",
    database:"==============databse name=========="
});

//.......................INSERT FUNCTION type-1.............................//



function insertData(id,name,company,price)
{

    //.............using ====> simple query execution.............//


    let sql = 'INSERT INTO product(pid,pname,pcompany,price) VALUES("'+id+'","'+name+'","'+company+'","'+price+'")';

    connected.query(sql,(error,result) =>{
        if(error)
        {
            throw error;
        }
        else{
            console.log("INSERTED DATA SUCCESFULLY..");
        }
    });

    
}



//connection part =======..and..====>>>> insert function call
connected.connect((error) =>{
    if(error)
    {
        throw error;
    }
    else
    {
         console.log("connected");

         //ahiya inserte vada function ne call karavu padseee

         insertData(8,'string','cold-wave',20);
    }
});






