import React from 'react'
import { NavCart, Nav, NavLink, NavIcon, }from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavCart to="/">
                <button>
                    Card
                    {/* <img src="../../images/pizza-1.jpg" alt="" style={{width:"200px"}}/> */}
                </button>
            </NavCart>
            <NavLink to='/'>Pizza</NavLink>
            <NavIcon onClick={toggle}>
               <button className="btn">
               
                   Menu
                </button>
            </NavIcon>
        </Nav>
        </>
    );
};

export default Navbar
