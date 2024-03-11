import React from 'react';
import Banner from "../../components/Banner/Banner";
import NewCollections from '../../components/NewCollections/NewCollections';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Offers from '../../components/Offers/Offers';
import PopularProducts from '../../components/PopularProducts/PopularProducts';

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularProducts />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}
