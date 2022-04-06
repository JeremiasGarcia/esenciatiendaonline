import "./ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({id, title, price, image}) => {

    const onAdd = () => {
        console.log("El producto fue agregado");
    }
    
    return(
        <div className="container-datail">
            <div className="images-datail"> 
                <img src={image} alt=""></img>
            </div>
            <div className="product-datail">
                <h3>{title}</h3>
                <h1>${price}</h1>
                <ItemCount stock={5} initial={0} onAdd={onAdd}/>
            </div>
        </div>
    );
}

export default ItemDetail;