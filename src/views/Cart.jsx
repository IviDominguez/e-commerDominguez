import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CartItems from "../components/CartItems";

const Cart = () => {
    const { cart, cleanCart, finalPrice } = useCart ()
    const navigate = useNavigate()

        return(
            <div>
                {!cart.length 
                ?
                    <>
                    <div>
                    <h2>No hay productos en tu carrito</h2>
                    <h4>Puedes visitar nuestro shop!</h4>
                    <button onClick={() => navigate("/productos")}>Ver productos</button>
                    </div>
                    </>
                : 
                    <>
                    <h2>Tus productos</h2>
                    {cart.map((art) => <CartItems key={art.id} art={art}/>)}
                    <span>Total a pagar: ${finalPrice()}</span>
                    <div>
                        <button>Finalizar compra</button>
                        <button onClick={cleanCart}>Vaciar carrito</button>
                    </div>
                    
                    </>}
            </div>)

}

export default Cart