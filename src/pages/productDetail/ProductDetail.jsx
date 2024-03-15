import React from 'react';
import '../productDetail/ProductDetail.css'
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import Product from '../../components/Product/Product';
import Price from '../../components/Price/Price';

export default function ProductDetail() {
    return (
        <>
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src="../assets/images/product_1.jpeg" alt="" />
                        <img src="../assets/images/product_2.jpeg" alt="" />
                        <img src="../assets/images/product_3.jpeg" alt="" />
                        <img src="../assets/images/product_4.jpeg" alt="" />
                    </div>
                    <div className="productdisplay-img">
                        <img src="../assets/images/product_1.jpeg" alt="" className="productdisplay-main-img" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <p className="pre">peanut butter</p>
                    <h1>Oat and Jaggery</h1>
                    <div className="star-ratings">
                        <Rating name="read-only" value={4} sx={{ mr: 1 }} readOnly />
                        <Typography component="legend">(125 Reviews)</Typography>
                    </div>
                    <div className="productdisplay-right-description">
                        A lightweight, usually knitted, pullover shirt, close-fitting and v a round neckline and short sleeves, worn as an undershirt or outs garment.
                    </div>
                    <Price />
                    <div className="productdisplay-right-size">
                        <div className="buttons">
                            <div className="amount">
                                <IconButton className="qty" aria-label="minus" size='small'>
                                    <RemoveIcon />
                                </IconButton>
                                <p>2</p>
                                <IconButton className="qty" aria-label="plus" size='small'>
                                    <AddIcon />
                                </IconButton>
                            </div>
                            <Button
                                component="label"
                                startIcon={<AddShoppingCartIcon />}
                                style={{ borderRadius: 10 }}
                                className="add-to-cart"
                            >Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Box className="container">
                <h1>Related Products</h1>
                <hr />
                <Box sx={{ p: 3 }} className="popular-products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </Box>
            </Box>
        </>
    )
}
