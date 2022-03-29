import "./Item.css"
const Item = ({id, title, price, pictureUrl}) => {
    return(
        <div className="card">
            <img src={pictureUrl} alt=""></img>
            <h4>{title}</h4>
            <p>${price}</p>
            <button>Ver detallaes del producto</button>
        </div>
    );
}

export default Item;


