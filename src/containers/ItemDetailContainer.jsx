import { useState, useEffect } from "react";
import "../css/ItemListContainer.css"
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {

    let url = '';
    const [product, setProduct] = useState({});
    const {productName} = useParams();

    if(productName){
        url = `https://fakestoreapi.com/products/${productName}`
    }else{
        url = 'https://fakestoreapi.com/products'
    }
    

    useEffect(() =>{
        const productsCollection = collection(db, "productos");
        const refDoc = doc(productsCollection, productName);
        getDoc(refDoc)
        .then((result) => {
            setProduct(result.data());
        });

        /*fetch(url)
        .then(res=>res.json())
        .then(json=>(setTimeout(()=>{
            setProduct(json);
        },2000)));*/
    }, [productName]);
    
    return(
        <div className="container-itemDetailContainer">
            {Object.keys(product).length !== 0 ? <ItemDetail id={product.id} title={product.title} price={product.price} image={product.image}/> : <h2>Cargando...</h2>}
        </div>
    );
}

export default ItemDetailContainer;