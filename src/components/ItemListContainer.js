import "./ItemListContainer.css"
import ItemCount from "./ItemCount";

const ItemListContainer = ({name, lastname}) => {

    const onAdd = () => {
        console.log("El producto fue agregado");
    }
    return(
        <div>
            <h3>Bienvenido {name} {lastname}</h3>
            <ItemCount stock={5} initial={0} onAdd={onAdd}/>
        
        </div>
    );
}

export default ItemListContainer;