const express=require('express');
const app=express();
const PORT=3003;
app.get('/',function(req,res){
    res.send(`<h1>Chào mọi người</h1>`);
});
app.listen(PORT,()=>{
    console.log(`you are login ${PORT}`);
})
