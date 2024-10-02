const express = require('express')
const app = express()

app.use(express.json());
const mongoose = require('mongoose');
const port = 3000

 const userRouter=require('./routes/user')
 const productRouter=require('./routes/product')
 const categoryRouter=require('./routes/category')
 const subcategoryRouter=require('./routes/subcategory')
 const wishlist=require('./routes/wishlist')

require('dotenv').config();
//const mongoURI = process.env.MongoURl;
const mongoURI = 'mongodb://0.0.0.0:27017/product';

mongoose
  .connect(mongoURI, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB has been started successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

 app.use('/',userRouter)
 app.use('/',productRouter)
 app.use('/',categoryRouter)
 app.use('/',subcategoryRouter)
 app.use('/',wishlist)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})