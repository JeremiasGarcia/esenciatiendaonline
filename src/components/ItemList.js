import "./ItemList.css";
import Item from "./Item";

const ItemList = ({items}) => {

    return(
        <div className="container-itemlist">
            {items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl}/>)}
        </div>
    );
}

export default ItemList;