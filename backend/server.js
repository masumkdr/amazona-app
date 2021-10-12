import express from 'express';
import data from './data.js';

const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready")
});

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/products/:id', (req, res) => {
    console.log(req.params.id)
    const product = data.products.find(product => product._id === req.params.id)
    console.log(product)
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({
            message : "product not Found"
        })
    }
})

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
});