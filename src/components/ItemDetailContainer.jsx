import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { data } from "../mocks/FakeApi";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)
    const { id } = useParams()

    useEffect(() => {
        data
        .then((res) => setProduct(res.find((item) => item.id === id)))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, [])
    
    return(
        <div style={{display: "flex",
                    justifyContent: "center", 
                    alignItems: "center",
                    marginTop: "3rem",
                    }}>
            {loading ? <p>Cargando...</p> : <ItemDetail product = {product}/>}

        </div>
    )
}


export default ItemDetailContainer