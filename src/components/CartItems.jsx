import React from "react";
import { useCart } from "../context/CartContext";

const CartItems = ({art}) => {
    const { removeItem } = useCart()

    return(
        <div className="divCartItems">
            <div>
                <div className="divCartItems2">
                    <img className="imgCartItems" src={art.img} alt={art.name} />
                    <div className="divCartItems3">
                        <h2 className="h2CartItems">{art.name}</h2>
                        <p className="parrafoCartItems">Cantidad: {art.quantity}</p>
                        <p className="parrafoCartItems2">Precio: $ {art.price}</p>
                        <button className="buttonCartItems" onClick={()=> removeItem(art.id)}>Eliminar</button>
                    </div>
                    
                </div>
                    
            </div>
        </div>
    )
}

export default CartItems