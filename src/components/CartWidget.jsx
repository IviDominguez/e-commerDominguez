import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{
        const { cartQuantity } = useCart()

        if(cartQuantity === 0){
            return <></>
        }
    return(
        <>
        <div className="divWidget">
            <Link to="/cart"><img src="/iconoCarrito2.png" alt="icono" className="imgWidget"/></Link>
            <h4 className="h4Widget">{cartQuantity() || "" }</h4>
        </div>
        </>            
    )
}


export default CartWidget;