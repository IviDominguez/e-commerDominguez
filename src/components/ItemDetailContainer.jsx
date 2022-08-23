import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const productRef = doc(db, "items", id)
        getDoc(productRef)
        .then((snapshot) => {
            setProduct({...snapshot.data(), id: snapshot.id})
        })
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))

    }, [id])
    
    return(
        <div style={{display: "flex",
                    justifyContent: "center", 
                    alignItems: "center",
                    marginTop: "3rem",
                    }}>
            {loading ? <p>Cargando...</p> : <ItemDetail key = {product.id} product = {product}/>}

        </div>
    )
}


export default ItemDetailContainer