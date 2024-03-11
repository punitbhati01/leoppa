import './NewCollections.css';
import Box from '@mui/material/Box';
import React from 'react';
import Product from '../Product/Product';

const NewCollections = () => {
    return (
        <Box className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <Box sx={{ p: 3 }} className="collections">
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

export default NewCollections
