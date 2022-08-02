import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    console.log("item", item);


    const getOneProduct = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) =>
                setItem(data.filter((item) => item.id === parseInt())[1])
            );
    };

    useEffect(() => {
        getOneProduct();
    }, []);


    return (
        <div>
            <ItemDetail item = {item}/>

        </div>
    );
}


export default ItemDetailContainer;