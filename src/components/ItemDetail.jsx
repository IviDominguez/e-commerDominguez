import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {
    const onAdd = () => {
        console.log("Agregaste al carrito")
    }
    return(
        <div style={{width: "30rem",
                    height: "45rem",
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
        </div>
    )
}

export default ItemDetail