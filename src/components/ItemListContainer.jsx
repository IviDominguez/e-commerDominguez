import ItemCount from "./ItemCount";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { data } from "../mocks/FakeApi";


const ItemListContainer = ({greeting}) =>{

    const [listProducts, setListProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    const onAdd = (cant) => {
        console.log(`Agregaste ${cant} items al carrito`);
    }
    
    

    useEffect(()=>{
        data
        .then((res) => setListProducts(res))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    },[])
    console.log(listProducts)


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
                >{greeting}
            </h2>

            { loading ? <p>Cargando...</p> : <ItemList listProducts = {listProducts} />} 
            
            
            
            

        </div>
    )
    
    

    
};


export default ItemListContainer;

