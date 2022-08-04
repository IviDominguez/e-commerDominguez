import React from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({product}) => {
    const onAdd = (cant) => {
        console.log(`Agregaste ${cant} items al carrito`);
    }
    const volver = useNavigate()

    return(
        <div style={{width: "30rem",
                    height: "50rem",
                    border: "5px solid rgb(155, 97, 179)",
                    borderRadius: "15px",
                    fontFamily: 'Franklin Gothic Medium',
                    color: "rgb(155, 97, 179)",
                    }}>
            <h2 style={{fontSize: "30px",
                        paddingLeft: "3rem",}}
            >Detalle del Producto: {product.name}</h2>

            <img style={{paddingLeft: "3rem",}} src={product.img} alt={product.name} />

            <p style={{fontSize: "18px",
                        paddingLeft: "2rem",}}
            >{product.description}</p>

            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />

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