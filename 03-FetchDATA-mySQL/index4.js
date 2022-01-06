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
    var sql = 'select name from personal';

    /*..ahiya su thase ke * aa reprsent kare row ne kare have eni jgaya
    aa me coloum nu name api daauv too ee coloun j whole data print
    karseee...okbija badha undefine thai jase */
    

    
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

//(1)==> var sql = 'select name from personal where gender like "%M%"';

//(2)==> var sql = 'select name from personal where name like "%patel%" and birth_date="1994/11/09"';
//ahiya AND lagyavu etle bannne compare karseeee etle ke bane value and ma true hovi joye


//(3)==> var sql = 'select name from personal where name like "%patel%" OR phone_no=1234567890';
/*ahiya OR etla mate ke jo koi be mathi 1 value hoi to pan document find kari apse 
   ama bane mathi koi 1 value true hoi to chali jase*/



