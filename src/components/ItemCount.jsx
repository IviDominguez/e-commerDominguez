
import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, onAdd, count, setCount }) => {
    
    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0 ){

            setCount(count - 1)
        } 
    }
    

    return (
    <>
    <div style={{
                display:'flex', 
                alignItems:'center',
                justifyContent: "center",
                margin: " 0 0 1rem 1rem",
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
                    >{count}</span>

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

    <div style={{
                display:'flex', 
                alignItems:'center',
                justifyContent: "center",
                marginBottom: "1rem",
                }}>
        <button style={{
                    width: "80px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: 'rgb(155, 97, 179)',
                    fontFamily: 'Franklin Gothic Medium',
                    fontSize: "15px",
                    margin: "0 0 1rem 1rem",
                    }} 
                    onClick={onAdd}
                    >Agregar</button>
    </div>

    
    </>
    )
}

export default ItemCount;