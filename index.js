import express from 'express'

const app = express()

const HOST = '127.0.0.1'
const PORT = 3001

app.get('/name', (req,res) => {
    res.status(200).json({
        name:"Ivan"
    })
})

app.get('/hello', (req,res) => {
    res.status(200).json({
        hello:"hello"
    })
})

app.get('/polina', (req,res) => {
    res.status(200).json({
       name:"Polina"
    })
})

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})