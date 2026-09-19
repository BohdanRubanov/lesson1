import express from 'express'

const app = express()

const HOST = '127.0.0.1'
const PORT = 3001
app.use(express.json())

app.post('/products', (req,res) => {

    if (req.query.fail !== undefined){
        return addProduct(req, res)
    }
   
    const {name, price, category, image = ''} = req.body;

    if (typeof name !== 'string' || typeof category !== 'string' || typeof price !== 'number'){
        return res.status(422).json()
    }
    if (name.length < 1 || price < 1 || category.length < 1){
        return res.status(422).json()
    }

    return res.status(201).json()
});

async function addProduct(req, res) {
    const fail = req.query.fail;
    if (fail === 'true') {
        return res.status(500).json();
    }
    if (fail === 'false') {
        res.json('Новий продукт є у масиві.')
    }
}

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`);
});
