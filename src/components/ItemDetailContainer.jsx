import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { data } from "../mocks/FakeApi";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        data
        .then((res) => setProduct(res.find((item) => item.id === 1)))
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