import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap/';

class UpdateForm extends Component {
    render() {
        return (
            <>
                <Form onSubmit={e=>{this.props.updateDigimon(e)}}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" value={this.props.img} onChange={this.props.updateImg} />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.props.name} onChange={this.props.updateName} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>level</Form.Label>
                        <Form.Control type="text" value={this.props.level} onChange={this.props.updateLevel} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}

export default UpdateForm
