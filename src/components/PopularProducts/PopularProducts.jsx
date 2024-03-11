import "./PopularProducts.css";
import Box from '@mui/material/Box';
import React from 'react';
import Product from '../Product/Product';

const PopularProducts = () => {
    return (
        <Box className="container">
            <h1>POPULAR PRODUCTS</h1>
            <hr />
            <Box sx={{ p: 3 }} className="popular-products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Box>
        </Box>
    )
}

export default PopularProducts
