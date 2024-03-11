import React from 'react';
import './NewsLetter.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const NewsLetter = () => {
    return (
        <Box className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Enter your Email Id'/>
                <Button>Subscribe</Button>
            </div>
        </Box>
    )
}

export default NewsLetter
