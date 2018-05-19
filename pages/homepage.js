import React from 'react';
import data from '../data/products';
import Products from '../features/product-listing/products';

const Home =(props)=>{
    return (
        <div>
        <h1>Home Page</h1>
        <Products products={data.products}/>
        </div>
    )
}

export default Home;