import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



const Item = ({ product }) => {
    const navegar = useNavigate()
    return(
        <Card style={{ 
            width: '18rem',
            borderRadius: "18px",
            fontFamily: 'Franklin Gothic Medium',
            }}>
        <Card.Img variant="top" src={product.img} alt={product.name} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>

            <Card.Text style={{fontSize: "12px",}}>${`${product.price}`}</Card.Text>
            <Card.Text style={{fontSize: "12px",}}>Stock: {`${product.stock}`}</Card.Text>    

            <Button variant="primary" onClick={()=> navegar(`/detalle/${product.id}`)}>Ver producto</Button>
        </Card.Body>
        </Card>

    )
}


export default Item;