const express = require ('express');
const ecommerceRouter = require('./ecommerceRoutes');
const passwordRouter = require('./passwordStrengthRoutes');

const app = express();
const PORT = 3000;

// Global Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) =>{
    res.send("For password stength go to (/passwordRoute/check-password) route! and For ecommerce go to (/ecommerceRoutes/) route!")

});
// Mount routers
app.use('/ecommerceRoutes',ecommerceRouter);
app.use('/passwordRoute',passwordRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
