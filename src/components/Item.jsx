import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Item = ({ item }) => {
    return(
        <Card style={{ 
            width: '18rem',
            borderRadius: "18px",
            fontFamily: 'Franklin Gothic Medium',
            }}>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0095/6910/8015/products/pikachu_800x.jpg?v=1569497966" />
        <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text style={{
            fontSize: "12px",
        }}>
            {`${item.body}`}
        </Card.Text>
        <Button variant="primary">Ver producto</Button>
        </Card.Body>
        </Card>

    )
}


export default Item;