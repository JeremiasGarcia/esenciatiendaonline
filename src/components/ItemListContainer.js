import { useState, useEffect } from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";
// import ItemCount from "./ItemCount";

const ItemListContainer = ({name, lastname}) => {

    const url = 'https://mocki.io/v1/dc29397a-8185-4757-94f9-1ea7a3b79701';
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>(setTimeout(()=>{
            setProducts(json);
        },2000)));
    }, []);

    // const onAdd = () => {
    //     console.log("El producto fue agregado");
    // }

    return(
        <div className="itemListContainer-container">
            <h3>Bienvenido {name} {lastname}</h3>
            <ItemList items={products}/>
            {/* <ItemCount stock={5} initial={0} onAdd={onAdd}/> */}
        
        </div>
    );
}

export default ItemListContainer;