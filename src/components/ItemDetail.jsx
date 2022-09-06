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
        <div className="divContainerDetail">
            <div className="divDetail">
                <div className="divDetail2">
                    <img className="imgDetail" src={img} alt={name} />
                </div>
                <div className="divDetail3">
                    <h2 className="h2Detail">Detalle del Producto: {name}</h2>
                    <p className="parrafoDetail">{description}</p>
                    <p className="parrafoDetail2">$ {price}</p>
                    <p className="parrafoDetail3">Stock: {stock}</p>
                </div>
            </div>
            
            
            { buy ? <div>
                <button className="buttonDetail" 
                        onClick={()=>{navigate("/productos")}}>Seguir comprando</button>
                <button className="buttonDetail2"
                        onClick={()=>{navigate("/cart")}}>Ir al carrito</button>
            </div>
            
            : <div>
                <div className="divDetail4">
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} count={count} setCount={setCount} />
                </div> 

                <div className="divButtonDetail3">
                    <button className="buttonDetail3" 
                        onClick={()=> volver("/productos")}>Volver</button>
                </div>
            </div>}
        </div> 
    )
}

export default ItemDetail