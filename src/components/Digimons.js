import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardColumns } from 'react-bootstrap/';

class Digimons extends Component {
    render() {
        return (
            <>
                <CardColumns>
                    {this.props.showCards &&
                        this.props.digimons.map((digimons, idx) => {
                            return (

                                <Card style={{ width: '18rem' }} key={idx}>
                                    <Card.Img variant="top" src={digimons.img} />
                                    <Card.Body>
                                        <Card.Title>{digimons.name}</Card.Title>
                                        <Card.Text>{digimons.level}</Card.Text>
                                        <Button onClick={() => this.props.addToFav(digimons)} variant="primary">Add To Fav</Button>
                                    </Card.Body>
                                </Card>

                            )
                        })}
                </CardColumns>
            </>
        )
    }
}

export default Digimons;
