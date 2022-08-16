import React from "react";
import Cart from "./Cart";
import { useState } from "react";
import { useEffect } from "react";
import { data } from "../mocks/FakeApi";
import { useParams } from "react-router-dom";



const CartContainer = () => {
    const [items, setItems] = useState({})
    const [loading, setLoading] = useState (true)
    const { id } = useParams()

    useEffect(() => {
        data
        .then((res) => setItems(res.concat((item) => item.id === id)))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, [id])


    return(
        <div style={{display: "flex",
                    justifyContent: "center", 
                    alignItems: "center",
                    marginTop: "3rem",
                    }}>
            {loading ? <p>Cargando...</p> : <Cart items = {items}/>}

        </div>
    )
}

export default CartContainer