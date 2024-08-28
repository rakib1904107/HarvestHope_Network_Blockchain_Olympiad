import React from 'react';
import Hero from '../Components/Hero/Hero';
import Products from '../Components/Products/Products';
import TopProducts from '../Components/TopProducts/TopProducts';
import Vegetable from '../Components/Vegetable/Vegetable';
import Review_about from '../Components/Review/Review_about';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <TopProducts />
      <Products />
      <Vegetable />
      <Review_about />
      <Footer />
    </div>
  );
}

export default Home;
