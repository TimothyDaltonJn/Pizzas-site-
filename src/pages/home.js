import React from 'react'
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Products from '../components/Products';
import { productData, productDataTwo } from '../components/Products/data';

const Home = () => {
    return (
        <div>
           <Hero/>
           <Products heading='Choose your favorite!' data={productData}/>
           <Feature/>
           <Products heading='Sweet treats for you' data={productDataTwo}/>
           <Footer/>
        </div>
    )
}

export default Home;
