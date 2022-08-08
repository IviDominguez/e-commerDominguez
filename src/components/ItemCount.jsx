
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)


    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > initial ){

            setCount(count - 1)
        } 
    }

    useEffect(() => {
        setCount(initial)
    },[initial])
    

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
                    onClick={()=>onAdd(count)}
                    >Agregar</button>
    </div>

    
    </>
    )
}

export default ItemCount;