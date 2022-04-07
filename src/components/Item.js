import "./Item.css"
import { NavLink } from 'react-router-dom';

const Item = ({id, title, price, image}) => {
    const ruta = '/products/';
    return(
        <div className="card">
            <img src={image} alt=""></img>
            <h4>{title}</h4>
            <p>${price}</p>
            <button><NavLink to={ruta+id}>Ver detallaes del producto</NavLink></button>
        </div>
    );
}

export default Item;


