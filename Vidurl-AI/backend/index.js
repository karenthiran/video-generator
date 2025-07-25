import express from 'express';

const app=express()

app.get('/test',(req,res)=>{
    return res.json('ok');
});

app.get('/create-story',(req,res)=>{
    const url=req.query.url;
    console.log({
        url,
    });
    return res.json('ok');
});

app.listen(8080,()=>console.log('Listing on port 8080'));