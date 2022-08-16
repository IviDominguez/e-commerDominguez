import { useContext } from "react";
import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext({});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        const itemInCart = cart.find((prod)=> prod.id === item.id)
        if(itemInCart){
            const updatedCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(updatedCart)
        }else{
            setCart([...cart, item])
        }   
    }
    console.log(cart)

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    
    const cleanCart = () =>{
        setCart([])
    }
    
    const removeItem = (id) =>{
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const cartQuantity = () =>{
        return cart.reduce((acc, prod) => acc += prod.quantity,0)
    }

    const finalPrice = () =>{
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity,0)
    }


    return(
        <CartContext.Provider value={{cart, addItem, isInCart, cleanCart, removeItem, cartQuantity, finalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)


