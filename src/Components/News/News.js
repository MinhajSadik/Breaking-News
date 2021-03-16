import { Button, Card } from 'react-bootstrap';
import React from 'react';

const News = (props) => {
    const { title, description, urlToImage} = props.article || {};
    return (

        <div className="container my-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;