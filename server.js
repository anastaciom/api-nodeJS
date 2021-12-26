//INITIAL CONFIG

const express = require('express');
const cors = require('cors');
const app = express();
const users = require('./src/users/users.json')
const todolist = require('./src/todolist/todolist.json')

app.use(express.json())
app.use(cors())

//PORT

const PORT = 8080

//ROUTES

app.get('/', (req, res)=>{
    res.status(404).json({error: 'Page not found'})
})

app.get('/users', (req, res)=>{
    res.json(users)
})
app.get('/todolist', (req, res)=>{
    res.json(todolist)
})


//INITIALIZING THE SERVER

app.listen(PORT, (err) => {
    if (!err) {
        return console.log('Server running')
    }
    console.log(err)
})