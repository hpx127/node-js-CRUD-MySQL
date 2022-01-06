var mysql = require('mysql');

var connected = mysql.createConnection({

    host:"===========host name============",
    user:"===========user name==========",
    password:"============password===========",
    database:"=========database name==========="
});


//........................GET-DATA FUNCTION........................//

function getdata()
{
    var sql = 'select * from personal';

        connected.query(sql,(error,result) =>{
            if(error)
            {
                throw error;
            }
            else{
                
                for(var i = 0;i<result.length;i++)
                {
                   console.log('ID ::'+result[i].id);
                   console.log('NAME ::'+result[i].name);
                   console.log('BIRTH-DATE ::'+result[i].birth_date);
                   console.log('MOBILE_NO ::'+result[i].phone_no);
                   console.log('GENDER ::'+result[i].gender);
                   console.log("<<--------------======-------------->>");
                   
                }
            }
        })

}


//......................UPDATE FUNCTION..............................//

function updateData(name,id)
{
     var sql = 'UPDATE personal SET name = ? where id = ?';

     connected.query(sql,[name,id],(error,result) =>{
         if(error)
         {
             throw error;
         }
         else
         {
             console.log("UPDATED VALUE....");
         }
     })
}

//.....connected to my php ==..and..==> function call..............//


connected.connect((error) =>{

    if(error)
    {
        throw error;
    }
    else
    {
        console.log("CONNECTED SUCCESFULLY....");

         //call first update function....

         updateData("KEYUR PATEL",3);

         //get all details.....

         getdata();
        
    }
});

//use this query..................

//(1.) ==>      var sql = 'UPDATE personal SET name = ? where id = ?';
/*ahiya name change karvanu 6e etle mare lakhavu pade ke name ane kai id nu 
name change karvanu 6e etla mate where okkk... */
//(2.) ==> var sql = 'UPDATE personal SET id = ?, gender = ? where phone_no = ?';
/*ek sathe badhi value change karvi hoi tooo... */


