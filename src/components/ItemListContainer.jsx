import ItemCount from "./ItemCount";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { data } from "../mocks/FakeApi";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = ({greeting}) =>{

    const [listProducts, setListProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    const { category } = useParams ()



    useEffect(() => {
        const db = getFirestore()
    
        const itemsCollection = collection(db, "items")
        getDocs(itemsCollection)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
                console.log(data)
                setListProducts(data)
    
            })
            .catch((error) => console.error(error))
            .finally(()=> setLoading(false))
    }, [category])
    

    /*useEffect(()=>{
        data
        .then((res) => {
            if(!category){
                setListProducts(res)
            }else{
                setListProducts(res.filter((product)=> product.category === category))
            }
        }) 
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    },[category])*/



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

