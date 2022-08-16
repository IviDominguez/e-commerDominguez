import React from "react";
import { useCart } from "../context/CartContext";



const CartItems = ({art}) => {
    const { removeItem } = useCart()

    return(
        <div style={{display: "flex",
                    justifyContent: "space-between", 
                    alignItems: "center",
                    padding: "3rem",
                    }}>
            <div style={{fontFamily: 'Franklin Gothic Medium',
                            color: "rgb(155, 97, 179)",
                            }}>
                                <div>
                                    <img style={{paddingLeft: "3rem",}} src={art.img} alt={art.name} />
                                    <h2 style={{fontSize: "30px",
                                                paddingLeft: "3rem",}}
                                    >{art.name}
                                    </h2>
                                    <p style={{fontSize: "18px",
                                            paddingLeft: "2rem",}}
                                    >{art.quantity}</p>
                                    <p style={{fontSize: "18px",
                                            paddingLeft: "2rem",}}
                                    >$ {art.price}</p>

                                    <button style={{width: "80px",
                                                height: "40px",
                                                borderRadius: "10px",
                                                backgroundColor: 'rgb(155, 97, 179)',
                                                fontFamily: 'Franklin Gothic Medium',
                                                fontSize: "15px",
                                                margin: "0 0 1rem 1rem",
                                                }} onClick={()=> removeItem(art.id)}>Eliminar</button>
                                </div>
                    
                    </div>
        </div>
    )
}

export default CartItems