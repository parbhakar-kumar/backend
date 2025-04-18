import express from 'express';
const app = express();

app.get('/',(req, res)=>{
res.send('sever is redey');
});

 // get alist of 5 jokes
 app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'Why was the math book sad? Because it had too many problems.'
        },
        {
            id:2,
            tital:'B joke',
            content:'Why did the scarecrow win an award? Because he was outstanding in his field.'
        },
        {
            id:3,
            tital:'c jocke',
            content:'Why did the bicycle fall over? Because it was two-tired.'
        },
        {
            id:4,
            tital:'D jocke',
            content:'Why did the banana go to the doctor? Because he wasn\'t peeling well.'
        },
        {
            id:5,
            tital:'E joke',
            content:'Why did the astronaut break up with his girlfriend? Because he needed space.'
        }
    ];
    res.send(jokes);
 });
    
const port =process.env.PORT || 3000;
 app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
 }); 
