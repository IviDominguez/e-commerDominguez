
import React from "react";
import { useState } from "react";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate()
    const { cart, finalPrice, cleanCart } = useCart()
    const [orderId, setOrderId] = useState("")
    const [buyer, setBuyer] = useState({})
    const dataBuyer = (e) =>{
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        })

    }
    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(Object.values(buyer).length !==3 ){
            alert("Todos los campos son requeridos")
        }else{
            const db = getFirestore()
            const buyCollection = collection(db, "ventas")
            addDoc(buyCollection,{
                buyer,
                items: cart,
                total: finalPrice(),
                date: serverTimestamp(),
            })
            .then((res) =>{
                setOrderId(res.id)
                cleanCart()
            })
            .catch((error) => console.error(error))
            }
        
    }
    return(
        <>
            {!orderId 
                ?<div className="divCheckout">
                <h2 className="h2Checkout">Checkout</h2>
                <form className="formCheckout" onSubmit={finalizarCompra}>
                    <input className="nameCheckout" type="text" placeholder="Nombre Completo" name="name" onChange={dataBuyer}/>
                    <input className="numberCheckout" type="number" placeholder="Numero de telefono" name="telefone" onChange={dataBuyer}/>
                    <input className="emailCheckout" type="email" placeholder="tuemail@mail.com" name="email" onChange={dataBuyer}/>
                    <button className="submitCheckout" type="submit">Finalizar Compra</button>
                </form>
            </div>
            :<div className="divCheckout2">
                <h2 className="h2Checkout2">Muchas Gracias por tu compra!</h2>
                <h3 className="h3Checkout">Tu orden es: {orderId}</h3>
                <button className="buttonCheckout" 
                        onClick={() => navigate("/")}>Volver a la Home</button>
            </div>}
        </>
        

    )
}

export default Checkout