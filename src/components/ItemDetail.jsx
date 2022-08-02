import ItemCount from "./ItemCount";



const ItemDetail = ({ item }) => {
    console.log("El item", item);
    return (
        <div className="flex bg-danger">
            <h3>ItemDetail</h3>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <img src="https://cdn.shopify.com/s/files/1/0095/6910/8015/products/pikachu_800x.jpg?v=1569497966" alt="peluche"></img>

            <ItemCount stock={5} initial={1} />
        </div>
    );
};
export default ItemDetail;