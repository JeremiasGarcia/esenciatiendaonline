import { useState, useEffect } from "react";
import "../css/ItemListContainer.css"
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const {productName} = useParams();
    
    useEffect(() =>{
        const productsCollection = collection(db, "productos");
        const refDoc = doc(productsCollection, productName);
        getDoc(refDoc)
        .then((result) => {
            setProduct(result.data());
        });
    }, [productName]);
    
    return(
        <div className="container-itemDetailContainer">
            {
                Object.keys(product).length !== 0 
                    ? <ItemDetail id={productName} title={product.title} price={product.price} image={product.image} stock={product.stock}/> 
                    : <h2>Cargando...</h2>
            }
        </div>
    );
}

export default ItemDetailContainer;