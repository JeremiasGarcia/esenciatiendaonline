import "../css/ItemList.css";
import Item from "./Item";

const ItemList = ({items}) => {

    return(
        <div className="container-itemlist">
            {items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} stock={item.stock}/>)}
        </div>
    );
}

export default ItemList;