import React from "react";
import { useCart } from "../context/CartContext";

const CartWidget = () =>{
        const { cartQuantity } = useCart()

        if(cartQuantity === 0){
            return <></>
        }
    return(
        <>
        <div style={{display: "flex",
                    alignItems: "center" }} >
            <img style={{width: "60px",
                        height: "50px",
                        marginRight: "2rem"
                        }} src="/iconoCarrito2.png" alt="icono" to="/cart" />
            <h4 style={{color: "black",
                        fontSize: "20px",
                        marginRight: "3rem",}}>{cartQuantity() || "" }</h4>
        </div>

        </>            
    )
}


export default CartWidget;