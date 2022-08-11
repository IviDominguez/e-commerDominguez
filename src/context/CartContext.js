import { useContext } from "react";
import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext({});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart([...cart, item])
    }

    /*const isInCart = () => {}

    const removeItem = () => {}
    
    const cleanCart = () =>{
        setCart([])
    }

    const valueToShare = {
        cart,
        cantInCart: cart.length,
        isInCart,
        addItem,
        removeItem,
        cleanCart,
    }*/

    return(
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)


