import React from 'react';
import './Banner.css';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <Box className='banner'>
            <Box className="banner-left">
                <h2>NEW ARRIVALS</h2>
                <Box>
                    <Box className="banner-hand-icon">
                        <p>new</p>
                        <img src="assets/images/wave-hand.png" alt="banner" />
                    </Box>
                    <p>products</p>
                    <p>for everyone</p>
                </Box>
                <Box >
                    <Button
                        component="label"
                        color="error"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        style={{ borderRadius: 50, mt: 2 }}
                        onClick={()=> navigate('/products')}
                    >Latest Products

                    </Button>
                </Box>
            </Box>
            <Box className="banner-right">
                <img src="assets/images/product_3.png" alt="product_banner" />
            </Box>
        </Box>
    )
}

export default Banner
