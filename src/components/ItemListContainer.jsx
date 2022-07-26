import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) =>(

    <h2 
    style={{backgroundColor: "rgb(155, 97, 179)",
    width: "230px",
    borderRadius: "18px", 
    fontSize: "25", 
    fontFamily: 'Franklin Gothic Medium',
    margin: "3rem", 
    paddingLeft: "6px"}}
    >{greeting}</h2>
    

    
);


export default ItemListContainer;

