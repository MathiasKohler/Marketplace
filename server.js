const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productController = require('./controllers/productController');


const app = express();
const port = 3000;
const message = {message: 'Welcome to Dresstore Application Test2'};


app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.json(message);
});
app.get('/api/products', productController.getAllProducts);
app.get('/api/products/:id', productController.getProductById);
app.post('/api/products', productController.createProduct);
app.put('/api/products/:id', productController.updateProduct);
app.delete('/api/products/:id', productController.deleteProductById);
app.delete('/api/products', productController.deleteAllProducts);



mongoose.connect('mongodb+srv://jophielserrano:HQtbafVyq3nYgbM4@cluster0.3gqvo5g.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=Cluster0e', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});