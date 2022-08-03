import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Item = ({ product }) => {
    return(
        <Card style={{ 
            width: '18rem',
            borderRadius: "18px",
            fontFamily: 'Franklin Gothic Medium',
            }}>
        <Card.Img variant="top" src={product.img} alt={product.name} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>

            <Card.Text style={{fontSize: "12px",}}>{`${product.description}`}</Card.Text>
            <Card.Text style={{fontSize: "12px",}}>${`${product.price}`}</Card.Text>
            <Card.Text style={{fontSize: "12px",}}>Stock: {`${product.stock}`}</Card.Text>    

            <Button variant="primary">Ver producto</Button>
        </Card.Body>
        </Card>

    )
}


export default Item;