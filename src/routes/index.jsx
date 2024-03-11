import React, { memo } from 'react'
import constant from '../utils/constant'
import { Route, Routes } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import {
    Home,
    Products,
    About,
    Contact,
    ProductDetail
} from '../pages'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path={constant.APP_ROUTES.INDEX} element={<Home />} />
            <Route path={constant.APP_ROUTES.HOME} element={<Home />} />
            <Route path={constant.APP_ROUTES.PRODUCTS} element={<Products />} />
            <Route path={constant.APP_ROUTES.PRODUCT} element={<ProductDetail />} />
            <Route path={constant.APP_ROUTES.ABOUT} element={<About />} />
            <Route path={constant.APP_ROUTES.CONTACTUS} element={<Contact />} />
        </Routes>
    )
}

export default memo(AppRoutes)