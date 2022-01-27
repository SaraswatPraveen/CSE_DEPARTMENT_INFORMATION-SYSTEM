const mysql=require('mysql');
const dotenv=require('dotenv');
const { response } = require('express');

let instance=null;
dotenv.config();
const connection=mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    port : process.env.DB_PORT
});

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    //console.log('db '+ connection.state);
});

class DbService{
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }
    async getAllData(year){
        if(year=="b_1"){
            try{
                const responce=await new Promise((resolve,reject)=>
                {
                    const query="SELECT * FROM first_year_details_b";
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result)
                    })
                });
                //console.log(response);
                return responce;
            }
            catch(error){
                console.log(error);
            }
        }
        else if(year=="b_2"){
            try{
                const responce=await new Promise((resolve,reject)=>
                {
                    const query="SELECT * FROM second_year_details_b";
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result)
                    })
                });
                //console.log(response);
                return responce;
            }
            catch(error){
                console.log(error);
            }
        }
        else if(year=="b_3"){
            try{
                const responce=await new Promise((resolve,reject)=>
                {
                    const query="SELECT * FROM third_year_details_b";
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result)
                    })
                });
                //console.log(response);
                return responce;
            }
            catch(error){
                console.log(error);
            }
        }
        else if(year=="b_4"){
            try{
                const responce=await new Promise((resolve,reject)=>
                {
                    const query="SELECT * FROM fourth_year_details_b";
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result)
                    })
                });
                //console.log(response);
                return responce;
            }
            catch(error){
                console.log(error);
            }
        }
        else if(year=="m_1"){
            try{
                const responce=await new Promise((resolve,reject)=>
                {
                    const query="SELECT * FROM first_year_details_m";
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result)
                    })
                });
                //console.log(response);
                return responce;
            }
            catch(error){
                console.log(error);
            }
        }
        else if(year=="m_2"){
            try{
                const responce=await new Promise((resolve,reject)=>
                {
                    const query="SELECT * FROM second_year_details_m";
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result)
                    })
                });
                //console.log(response);
                return responce;
            }
            catch(error){
                console.log(error);
            }
        }
        else if(year=="ph"){
            try{
                const responce=await new Promise((resolve,reject)=>
                {
                    const query="SELECT * FROM ph";
                    connection.query(query,(err,result)=>{
                        if(err) reject(new Error(err.message));
                        resolve(result)
                    })
                });
                //console.log(response);
                return responce;
            }
            catch(error){
                console.log(error);
            }
        }

    }
    
}
module.exports=DbService;