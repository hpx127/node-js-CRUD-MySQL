var mysql = require('mysql');

var connected = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"student"
});


//........................GET-DATA FUNCTION........................//

function getdata()
{
    //whole data api dese query...
    var sql = "select * from personal";
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

//.....connected to my php ==..and..==> function call..............//


connected.connect((error) =>{

    if(error)
    {
        throw error;
    }
    else
    {
        console.log("CONNECTED SUCCESFULLY....");

        getdata();
        
    }
});

