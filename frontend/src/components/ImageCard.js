import React from "react";
import { Card, Button } from 'react-bootstrap';


function ImageCard({ image, deleteImage }){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img alt={image.alt_description} variant="top" src={image.urls.small} />
            <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>
                    {image.description ||  image.alt_description}
                </Card.Text>
                <Button onClick={() => deleteImage(image.id)} variant="primary">Delete</Button>
            </Card.Body>
        </Card>
    );
};


export default ImageCard;