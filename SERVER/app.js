const express = require('express');
const app= express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();

const dbService=require('./dbservice');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//read
app.get('/getAll',(request,responce)=>{
    const db=dbService.getDbServiceInstance();
    const result=db.getAllData();
    result
    .then(data => responce.json({data : data}))
    .catch(err=>console.log(err));
});
app.get('/getAll_m_1',(request,responce)=>{
    const db=dbService.getDbServiceInstance();
    const result=db.getAllData("m_1");
    result
    .then(data => responce.json({data : data}))
    .catch(err=>console.log(err));
});
app.get('/getAll_m_2',(request,responce)=>{
    const db=dbService.getDbServiceInstance();
    const result=db.getAllData("m_2");
    result
    .then(data => responce.json({data : data}))
    .catch(err=>console.log(err));
});
app.get('/getAll_b_1',(request,responce)=>{
    const db=dbService.getDbServiceInstance();
    const result=db.getAllData("b_1");
    result
    .then(data => responce.json({data : data}))
    .catch(err=>console.log(err));
});
app.get('/getAll_b_2',(request,responce)=>{
    const db=dbService.getDbServiceInstance();
    const result=db.getAllData("b_2");
    result
    .then(data => responce.json({data : data}))
    .catch(err=>console.log(err));
});
app.get('/getAll_b_3',(request,responce)=>{
    const db=dbService.getDbServiceInstance();
    const result=db.getAllData("b_3");
    result
    .then(data => responce.json({data : data}))
    .catch(err=>console.log(err));
});
app.get('/getAll_b_4',(request,responce)=>{
    const db=dbService.getDbServiceInstance();
    const result=db.getAllData("b_4");
    result
    .then(data => responce.json({data : data}))
    .catch(err=>console.log(err));
});
app.get('/getAll_ph',(request,responce)=>{
    const db=dbService.getDbServiceInstance();
    const result=db.getAllData("ph");
    result
    .then(data => responce.json({data : data}))
    .catch(err=>console.log(err));
});
app.listen(process.env.PORT,()=>console.log('app running'));