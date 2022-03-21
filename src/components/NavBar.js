import './NavBar.css'
import CartWidget from "./CartWidget";
const NavBar = () => {
    return(
        <div>
            <h1>Esencia Tienda Online</h1>
            <nav>
                <a href="#">Productos de limpieza</a>
                <a href="#">Aromas</a>
                <a href="#">Hornitos</a>
                <a href="#">Lámparas de sal</a>
                <a href="#">Saphirus</a>
                <a href="#">Sagrada madre</a>
                <a href="#">Sahumerios premium</a>
                <a href="#">Portasahumerios y sahumadores</a>
            </nav>
            <button>Inicio</button>
            <CartWidget />
        </div>
    );
};

export default NavBar;