import ItemCount from "./ItemCount";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) =>{
    const [items, setItems] = useState ([])

    useEffect (( ) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setItems (data)
        })
    }, [])

    const onAdd = (cant) => {
        console.log(`Agregaste ${cant} items al carrito`);
    }


    return(
        <div>
            <h2 
                style={{backgroundColor: "rgb(155, 97, 179)",
                        width: "230px",
                        borderRadius: "18px", 
                        fontSize: "25", 
                        fontFamily: 'Franklin Gothic Medium',
                        margin: "3rem", 
                        paddingLeft: "6px"}}
                >{greeting}</h2>

                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                <ItemList items = {items} />
        </div>
    )
    
    

    
};


export default ItemListContainer;

