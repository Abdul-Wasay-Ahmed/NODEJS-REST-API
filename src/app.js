const express  = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const app = express()
const PORT  = 3060



// create application/json parser
var jsonParser = bodyParser.json()



const users = []

//GET
app.get('/hello' , (req,res)=>{
    res.send("Hello World")
})













app.get('/getUsers' 
, (req,res)=>{
    res.send(users)
})

//POST
app.post('/user' ,jsonParser, (req,res)=>{
  const {email , phone , name } = req.body
  users.push({ id: uuidv4() ,name:name , email:email , phone:phone})

  res.end("USER ADDED")

})




app.delete('/user',(req,res)=>{
    users.pop()
    res.send(users)
})


//CRUD
//C: CREATE (post)
//R: READ (get)
//U: UPDATE (put,patch) 
//D: DELETE (delete)


//MONGO
//U: UPDATE (put,patch) 


app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`))