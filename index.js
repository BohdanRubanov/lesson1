import express from 'express'

const app = express()

const HOST = '127.0.0.1'
const PORT = 3001

const products = [
    {id:1, name:'laptop', price:40000, category:'electronics'},
    {id:2, name:'phone_charger', price:1500, category:'electronics'},
    {id:3, name:'closet', price:14000, category:'furniture'},
    {id:4, name:'chair', price:1000, category:'furniture'},
    {id:5, name:'desk_lamp', price:800, category:'furniture'}
]

app.get('/products', (req, res) => {
    const {take, category} = req.query

    let filtered_products = products

    if (category) {
        filtered_products = filtered_products.filter(product => product.category === category)
      }
    if (take) {
        filtered_products = filtered_products.slice(0, Number(take))
    }
    res.json(filtered_products)

});

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`);
});
