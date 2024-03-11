import React from 'react';
import './Offers.css';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Offers = () => {
    const navigate = useNavigate();

    return (
        <Box className="offers">
            <Box className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLING PRODUCTS</p>
                <Box >
                    <Button
                        component="label"
                        color="error"
                        variant="contained"
                        tabIndex={-1}
                        size="large"
                        style={{ borderRadius: 50, mt: 3 }}
                        onClick={() => navigate('/products')}
                    >Latest Products
                    </Button>
                </Box>
            </Box>
            <Box className="offers-right">
                <img src="assets/images/product_4.png" alt="product_banner" />
            </Box>
        </Box>
    )
}

export default Offers
