require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitwe',(req,res)=>{
    res.send('twitwe hello')
})
app.get('/youtub',(req,res)=>{
  res.send('youtub hello')
} )
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
