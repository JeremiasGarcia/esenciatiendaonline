import Item from "./Item";

const ItemList = ({items}) => {

    return(
        <div>
            {items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl}/>)}
        </div>
    );
}

export default ItemList;