
import React from 'react'
import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd }) => {
    const [contador, setContador] = useState(initial)


    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > initial ){

            setContador(contador - 1)
        } 
    }
    

    return (
    <>
    <div style={{
                display:'flex', 
                alignItems:'center',
                margin: " 0 0 1rem 6rem",
                }}>

        <button style={{width: "40px",
                        height: "30px",
                        borderRadius: "10px",
                        backgroundColor: 'rgb(155, 97, 179)',
                        fontFamily: 'Franklin Gothic Medium',
                        fontSize: "15px",
                        marginRight: "1rem",
                        }} 
                        onClick={restar}
                        >-</button>

        <span style={{fontFamily: 'Franklin Gothic Medium',
                    fontSize: "15px",
                    }}
                    >{contador}</span>

        <button style={{width: "40px",
                        height: "30px",
                        borderRadius: "10px",
                        backgroundColor: 'rgb(155, 97, 179)',
                        fontFamily: 'Franklin Gothic Medium',
                        fontSize: "15px",
                        marginLeft: "1rem",
                        }} 
                        onClick={sumar}
                        >+</button>
    </div>

    <button style={{width: "80px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: 'rgb(155, 97, 179)',
                    fontFamily: 'Franklin Gothic Medium',
                    fontSize: "15px",
                    margin: "0 0 1rem 7.2rem",
                    }} 
                    onClick={()=>onAdd(contador)}
                    >Comprar</button>
    </>
    )
}

export default ItemCount;