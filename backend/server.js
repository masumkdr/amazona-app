import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';


const app = express();

mongoose.connect('mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

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
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({
            message: "product not Found"
        })
    }
})

app.use('/api/users', userRouter);



const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
});