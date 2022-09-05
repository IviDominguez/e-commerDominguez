import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



const Item = ({ product }) => {

    const {name, id, img, price} = product
    const navegar = useNavigate()
    return(
        <Card className="cardItem">
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>

            <Card.Text className='cardText'>${`${price}`}</Card.Text>    

            <Button variant="primary" onClick={()=> navegar(`/detalle/${id}`)}>Ver producto</Button>
        </Card.Body>
        </Card>

    )
}


export default Item;