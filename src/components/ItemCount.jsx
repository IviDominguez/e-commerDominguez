import { useState } from "react";



function ItemCount () {
    const [number, setNumber] = useState (1);
    const sumar = () => {
        setNumber ( number + 1)
    };
    const restar = () => {
        setNumber (number - 1)
    };
    return (
        <div>
            <h1
                style={
                    { backgroundColor: "rgb(231, 178, 196)",
                    textAlign: "center",
                    borderRadius: "15",  
                    }}>

            </h1>
            <p onClick={ sumar }>+</p>
            <p onClick={ restar }>-</p>

        </div>
    )
};



export default ItemCount;