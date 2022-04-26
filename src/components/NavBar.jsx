import '../css/NavBar.css'
import { useState, useEffect } from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from 'react-router-dom';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
const NavBar = () => {

    const [categories, setCategories] = useState([]);
    const ruta = '/category/';

    useEffect(() =>{
        const categoriesCollection = collection(db, "categorias");
        getDocs(categoriesCollection)
        .then((result) => {
            const docs = result.docs;
            const list = docs.map(category => {
                return category.data();
            });
            setCategories(list[0]['categorias']);
        });
    }, []);


    return(
        <div className="container-navbar">
            <Link className="temporal" to="/">
                <h1>Esencia Tienda Online</h1>
            </Link>
            
            <nav>
                {categories.map((category, index) => <Link className="temporal" to={ruta+category} key={index}>{category}</Link>)}
            </nav>

            <NavLink to="/cart">
                <CartWidget />
            </NavLink>
            
        </div>
    );
};

export default NavBar;