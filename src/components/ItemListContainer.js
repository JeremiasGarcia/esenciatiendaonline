import { useState, useEffect } from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";
// import ItemCount from "./ItemCount";

const ItemListContainer = ({name, lastname}) => {

    const url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>(setTimeout(()=>{
            setProducts(json);
        },2000)));
    }, []);

    if (!products.length) return <h2>Cargando...</h2>;

    // const onAdd = () => {
    //     console.log("El producto fue agregado");
    // }

    return(
        <div className="container-itemListContainer">
            <h3>Bienvenido {name} {lastname}</h3>
            <ItemList items={products}/>
            {/* <ItemCount stock={5} initial={0} onAdd={onAdd}/> */}
        
        </div>
    );
}

export default ItemListContainer;