import React from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const ItemDetail = ({product}) => {
    const { id, name, description, img, price, stock } = product
    const [count, setCount] = useState(0)
    const [buy, setBuy] = useState(false)

    const navigate = useNavigate()
    const volver = useNavigate()
    
    const { addItem } = useCart ()
    
    
    const onAdd = () => {
        let itemToBuy = {
            id,
            name,
            img,
            price,
            quantity: count
        }
        setBuy(true)

        addItem(itemToBuy)

    }
    
    
    return(
        <div style={{width: "30rem",
                    height: "55rem",
                    border: "5px solid rgb(155, 97, 179)",
                    borderRadius: "15px",
                    fontFamily: 'Franklin Gothic Medium',
                    color: "rgb(155, 97, 179)",
                    }}>
            <h2 style={{fontSize: "30px",
                        paddingLeft: "3rem",}}
            >Detalle del Producto: {name}</h2>

            <img style={{paddingLeft: "3rem",}} src={img} alt={name} />

            <p style={{fontSize: "18px",
                        paddingLeft: "2rem",}}
            >{description}</p>
            
            <p style={{fontSize: "18px",
                        paddingLeft: "2rem",}}
            >$ {price}</p>
            
            <p style={{fontSize: "18px",
                        paddingLeft: "2rem",}}
            >Stock: {stock}</p>

            { buy ? <div>
                <button style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: 'rgb(155, 97, 179)',
                    fontFamily: 'Franklin Gothic Medium',
                    fontSize: "15px",
                    margin: "0 0 1rem 1rem",
                    }} onClick={()=>{navigate("/productos")}}>Seguir comprando</button>
                <button style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: 'rgb(155, 97, 179)',
                    fontFamily: 'Franklin Gothic Medium',
                    fontSize: "15px",
                    margin: "0 0 1rem 1rem",
                    }} onClick={()=>{navigate("/cart")}}>Ir al carrito</button>

            </div>
            
            : <ItemCount initial={1} stock={product.stock} onAdd={onAdd} count={count} setCount={setCount} />}

            <button style={{
                    width: "80px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: 'rgb(155, 97, 179)',
                    fontFamily: 'Franklin Gothic Medium',
                    fontSize: "15px",
                    margin: "0 0 1rem 1rem",
                    }} onClick={()=> volver("/productos")}>Volver</button>
        </div>
    )
}

export default ItemDetail