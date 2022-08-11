import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{
    const valueToShare = useContext(CartContext)
    return(
        <>
        <div style={{display: "flex",
                    alignItems: "center" }} >
            <img style={{width: "60px",
                        height: "50px",
                        marginRight: "2rem"
                        }} src="/iconoCarrito2.png" alt="icono" />
            <h4 style={{color: "black",
                        fontSize: "20px",
                        marginRight: "3rem",}}>{valueToShare.cantInCart }</h4>
        </div>

        </>            
    )
}


export default CartWidget;