import "./Item.css"
const Item = ({id, title, price, image}) => {
    return(
        <div className="card">
            <img src={image} alt=""></img>
            <h4>{title}</h4>
            <p>${price}</p>
            <button>Ver detallaes del producto</button>
        </div>
    );
}

export default Item;


