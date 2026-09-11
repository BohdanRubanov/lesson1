import express from 'express'

const app = express()

const HOST = '127.0.0.1'
const PORT = 8000

app.get('/George', (req,res) => {
    res.status(200).json({
        name:"George"
    })
})

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})