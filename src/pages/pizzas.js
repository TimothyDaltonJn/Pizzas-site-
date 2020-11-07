import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Pizzas = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
        <Navbar />
        <Sidebar isOpen={isOpen} onClick={toggle}/>
        <Footer />
        </div>    
    )

}

export default Pizzas;
