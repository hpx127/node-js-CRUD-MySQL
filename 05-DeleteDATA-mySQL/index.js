var mysql = require('mysql');


var connected = mysql.createConnection({
    host:"=========host name=============",
    user:"================user name==============",
    password:"================password==========",
    database:"===========database name==========="
});

//.........................DISPLAY - -DATA.........................//

 function getDATA()
 {
     var sql = 'SELECT * from product';

     connected.query(sql,(error,result) =>{

        for(var i=0;i<result.length;i++)
        {
            console.log("product id:===>"+result[i].pid);
            console.log("product name:===>"+result[i].pname);
            console.log("product company:===>"+result[i].pcompany);
            console.log("product price:===>"+result[i].price);
            console.log("<=================----===================>");
        }
     });
 }

 //.......................DELETE-DATA-FUNCTION....................//

 function deleteDATA(id)
 {
     var sql = 'DELETE FROM product where pid = ?';

     connected.query(sql,[id],(error,result) =>{

        if(error)
        {
            throw error;
        }
        else
        {
            console.log("DELETE succesfully"+id+"this id....");
        }
     });
     
 }

//.........................CONNECTED-mySQL.........................//
connected.connect((error) =>{
    if(error)
    {
        throw error;
    }
    else{
        console.log("CONNECTED SUCCESFULLY...");

        //call deleteDATA function...
        deleteDATA(9);

          //call getDATA function..
          getDATA();
    }
})
