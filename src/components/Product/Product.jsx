import React from 'react';
import "./Product.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = () => {
    return (
        <Box>
            <Card className='product-card' sx={{ maxWidth: 270, borderRadius: 3, mb:3 }} raised={true}>
                <CardMedia
                    sx={{ height: 220 }}
                    image="../assets/images/product_1.jpeg"
                    title="peanut butter"
                />
                <CardContent>
                    <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Oats and Jaggery
                        </Typography>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        455
                    </Typography>
                </CardContent>
                <CardActions sx={{ height: 80 }}>
                    <Button
                        component="label"
                        variant="contained"
                        fullWidth={true}
                        size="large"
                        startIcon={<AddShoppingCartIcon />}
                        style={{ borderRadius: 10 }}
                    >Add to cart

                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Product
