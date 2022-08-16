import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



const Item = ({ product }) => {

    const {name, id, description, img, price, stock} = product
    const navegar = useNavigate()
    return(
        <Card style={{ 
            width: '18rem',
            borderRadius: "18px",
            fontFamily: 'Franklin Gothic Medium',
            }}>
        <Card.Img variant="top" src={product.img} alt={name} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>

            <Card.Text style={{fontSize: "12px",}}>${`${price}`}</Card.Text>    

            <Button variant="primary" onClick={()=> navegar(`/detalle/${id}`)}>Ver producto</Button>
        </Card.Body>
        </Card>

    )
}


export default Item;