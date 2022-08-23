
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = ({greeting}) =>{

    const [listProducts, setListProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    const { category } = useParams ()



    useEffect(() => {
        const db = getFirestore()
    
        const itemsCollection = collection(db, "items")
        if (category){
            const q = query(itemsCollection, where("category", "==",category))
            getDocs(q)
                .then((snapshot) => {
                    setListProducts(
                        snapshot.docs.map((doc) => ({...doc.data(), category: doc.category }))
                    )
                })
                .catch((error) => console.error(error))
                .finally(()=> setLoading(false))
        }else{
            getDocs(itemsCollection)
            .then((snapshot) => {
                setListProducts(
                    snapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))
                )
            })
            .catch((error) => console.error(error))
            .finally(()=> setLoading(false))
        }  
    }, [category])

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

