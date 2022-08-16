import React from "react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Cart = ({items}) => {
    const { id, name, img, price } = items
    const [count, setCount] = useState(0)
    const { isInCart } = useCart ()
    const { removeItem } = useCart ()
    const [full, setFull] = useState(false)
    const { finalPrice } = useCart ()


    const showItems = () =>{
        let itemsInCart = {
            id,
            name,
            img,
            price,
            quantity: count
        }
        setFull(true)
        isInCart(itemsInCart)




        return(
            <div style={{width: "30rem",
                        height: "55rem",
                        border: "5px solid rgb(155, 97, 179)",
                        borderRadius: "15px",
                        fontFamily: 'Franklin Gothic Medium',
                        color: "rgb(155, 97, 179)",
                        }}>
                { full ? <div>
                <h2 style={{fontSize: "30px",
                            paddingLeft: "3rem",}}
                >Detalle de compra: {name}</h2>
    
                <img style={{paddingLeft: "3rem",}} src={img} alt={name} />
                
                <p style={{fontSize: "18px",
                            paddingLeft: "2rem",}}
                >$ {price}</p>
                
    
                <button style={{
                        width: "80px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: 'rgb(155, 97, 179)',
                        fontFamily: 'Franklin Gothic Medium',
                        fontSize: "15px",
                        margin: "0 0 1rem 1rem",
                        }} onClick={removeItem}>Eliminar</button>

                <ItemCount count={count} setCount={setCount} />
                </div> : 
                <div>
                    <h2>No hay items en tu carrito</h2>
                    <Link to="/productos">Ver productos</Link>
                </div>
                }            

                    
            </div>
        )
    }

    
    
}

export default Cart
