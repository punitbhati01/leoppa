import React from 'react';
import { Box } from '@mui/material';
import Product from '../../components/Product/Product';

export default function Products() {
  return (
    <Box className="container">
      <h1>PRODUCTS</h1>
      <hr />
      <Box sx={{ p: 3 }} className="popular-products">
        <Product />
        <Product />
        <Product />
        <Product />
      </Box>
    </Box>
  )
}
