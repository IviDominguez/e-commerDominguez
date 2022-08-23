
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
                ?<div>
                <h2>Checkout</h2>
                <form onSubmit={finalizarCompra}>
                    <input type="text" placeholder="Nombre Completo" name="name" onChange={dataBuyer}/>
                    <input type="number" placeholder="Numero de telefono" name="telefone" onChange={dataBuyer}/>
                    <input type="email" placeholder="tuemail@mail.com" name="email" onChange={dataBuyer}/>
                    <button type="submit">Finalizar Compra</button>
                </form>
            </div>
            :<div>
                <h2>Muchas Gracias por tu compra!</h2>
                <h3>Tu orden es: {orderId}</h3>
                <button onClick={() => navigate("/")}>Volver a la Home</button>

            </div>}
        </>
        

    )
}

export default Checkout