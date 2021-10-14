import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';


dotenv.config();

const app = express();


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
    useUnifiedTopology: true,
  
})

app.get('/', (req, res) => {
    res.send("Server is ready")
});



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
});