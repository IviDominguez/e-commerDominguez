import React from "react";
import Item from "./Item";

const ItemList = ({listProducts}) => {
    return (
        <div style={{display: "flex",
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    flexWrap: "wrap",
                    margin: "0 8rem 3rem 8rem", }}>
            {listProducts.map((product) => <Item key = {product.id} product = {product}/>)}
        </div>
    )
}


export default ItemList;