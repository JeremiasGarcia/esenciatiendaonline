import './NavBar.css'
import { useState, useEffect } from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {

    const url = 'https://fakestoreapi.com/products/categories';
    const [categories, setCategories] = useState([]);
    const ruta = '/category/';

    useEffect(() => {
        fetch(url)
            .then(res=>res.json())
            .then(json=>setCategories(json))
    });

    return(
        <div className="container-navbar">
            <Link className="temporal" to="/">
                <h1>Esencia Tienda Online</h1>
            </Link>
            
            <nav>
                {categories.map((category, index) => <Link className="temporal" to={ruta+category} key={index}>{category}</Link>)}
            </nav>
            {/* <button>Inicio</button> */}

            <NavLink to="/cart">
                <CartWidget />
            </NavLink>
            
        </div>
    );
};

export default NavBar;