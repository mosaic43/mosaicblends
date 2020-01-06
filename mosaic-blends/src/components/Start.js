import React, { Component } from 'react';
// import './Register.css';
// import { Link } from 'react-router-dom';
import { Form, Button, Col } from "react-bootstrap";


class Register extends Component {


render() {
    return (
      <div className="registrationContainer">
        <h3 className="display-4 text-center">Welcome to Mosaic</h3>
        <br />
          <h4>Please fill out the form below to create your Mosaic Blends account.</h4>
          <div className="text">  
            <br />
            <br />

            <Form onSubmit={this.onSubmit}>
                <Form.Row className="name">
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Control type="text" name="firstname" onChange={this.handleChange} placeholder="Enter First Name"  />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Control type="text" name="lastname" onChange={this.handleChange} placeholder="Enter Last Name" />
                    </Form.Group>
                </Form.Row>
                <br />
                <Form.Group controlId="formGridEmail" className="email">
                    <Form.Control type="email" name="email" onChange={this.handleChange} placeholder="Email" />
                </Form.Group>
                <br />
                <Form.Group controlId="formGridPassword" className="email">
                    <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="password" />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
             </Form>

          </div>
      </div>
    );
  }
}

  
export default Register;