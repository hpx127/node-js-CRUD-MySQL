var mysql = require('mysql');
var connected = mysql.createConnection({
    host:"localhost",
    user:"=======user name=========",
    password:"=========password ========",
    database:"student"
});

//.......................INSERT FUNCTION type-2.............................//



function insertData(id,name,company,price)
{

  //.............using ===> parameterrized query.....................//
  
  let sql = 'INSERT INTO product(pid,pname,pcompany,price) VALUES(?,?,?,?)';
  connected.query(sql,[id,name,company,price],(error,result) =>{
      if(error)
      {
          throw  error;
      }
      else
      {
          console.log("INSERETED DATA SUCCESFULLY..");
      }
  });
}




//connection part........................and insert function call
connected.connect((error) =>{
    if(error)
    {
        throw error;
    }
    else
    {
         console.log("connected");

         //ahiya inserte vada function ne call karavu padseee

         insertData(9,'20-20 biscute','parle',10);
    }
});






