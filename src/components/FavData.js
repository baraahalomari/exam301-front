import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/';

class FavData extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }} key={this.props.idx}>
                    <Card.Img variant="top" src={this.props.digimons.img} />
                    <Card.Body>
                        <Card.Title>{this.props.digimons.name}</Card.Title>
                        <Card.Text>{this.props.digimons.level}</Card.Text>
                        <Button onClick={()=>this.props.showUpdateForm(this.props.idx)} variant="primary">UPDATE</Button>
                        <Button onClick={()=>this.props.deletFunction(this.props.idx)} variant="primary">DELETE</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default FavData;