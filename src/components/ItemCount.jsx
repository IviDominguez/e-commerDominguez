import React from 'react'

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
    <div className='divCount'>

        <button className='buttonCount' onClick={restar}>-</button>

        <span className='spanCount'>{count}</span>

        <button className='buttonCount2' onClick={sumar}>+</button>
    </div>

    <div className='divCount2'>
        <button className='buttonCount3' onClick={onAdd} disabled={count === 0}>Lo quiero!</button>
    </div>
    </>
    )
}

export default ItemCount;