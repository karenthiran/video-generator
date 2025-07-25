import express from 'express';

const app=express()

app.get('/test',(req,res)=>{
    return res.json('ok');
});

app.get('/create-story',(req,res)=>{
    const url=new URL(req.url);
    const urlForStory=url.searchParams.get('url')
    return res.json(req.url);
});

app.listen(8080,()=>console.log('Listing on port 8080'));