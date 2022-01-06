var mysql = require('mysql');

var connected = mysql.createConnection({

    host:"localhost",
    user:"===========user name=======",
    password:"==========passsword=======",
    database:"student"
});


//........................GET-DATA FUNCTION........................//

function getdata()
{
    var sql = 'select * from personal where name ="CHEEKU PATEL"';
    /* ahiya sql ni query where used kari ane particuler koi 
    id find karvi hoi to tevi rite niche ni syntax pan muki ne
     joi sakay */

    
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


//...............USED THIS QUERY...................//
//(1)==> var sql = 'select * from personal where name ="CHEEKU PATEL"';
//(2)==> var sql = 'select * from personal where birth_date="1994/11/09"';
//(3)==> var sql = 'select * from personal where phone_number=1234567890';
//(4)==> var sql = 'select * from personal where gender="M"';
