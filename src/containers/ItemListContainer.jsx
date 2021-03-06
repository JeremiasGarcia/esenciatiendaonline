import { useState, useEffect } from "react";
import "../css/ItemListContainer.css"
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemListContainer = ({name, lastname}) => {
    let q = '';
    const [products, setProducts] = useState([]);
    const {categoryName} = useParams();
    
    useEffect(() =>{
        const productsCollection = collection(db, "productos");
        if(categoryName){
            q = query(productsCollection, where("category", "==", categoryName));
        }else{
            q = productsCollection;
        }
        getDocs(q)
        .then((result) => {
            const docs = result.docs;
            const list = docs.map(product => {
                const id = product.id;
                const producto = {
                    id,
                    ...product.data()
                }
                return producto;
            });
            setProducts(list);
        });
    }, [categoryName]);
    
    return(
        <div className="container-itemListContainer">
            {
                products.length
                    ? <><h3>Bienvenido {name} {lastname}</h3> <ItemList items={products}/></> 
                    : <h2>Cargando...</h2>
            }
        </div>
    );
}

export default ItemListContainer;