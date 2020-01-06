import React, { Component } from 'react';
// import './Register.css';
// import { Link } from 'react-router-dom';
import { Form, Button, Col } from "react-bootstrap";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.createAccount.bind(this);
        }

// handleChange(event) {
//     this.setState ({firstname: event.target.value})
// }

        handleChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;
            this.setState ({
                [name]: value
            });
        }

        // submitAccount = () => {
        //     this.setState(() => {
        //         return {
        //             firstname: event.target.firstname,
        //             lastname: event.target.lastname,
        //             email: event.target.email,
        //             password: event.target.password
        //         };
        //     });
        // };

createAccount(e) {

   e.preventDefault();
   var self = this;
    
    const data = { 
            firstname: self.state.firstname,
            lastname: self.state.lastname,
            email: self.state.email,
            password: self.state.password
    }
    
    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('http://localhost:9000/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .then(alert("Success!"))
    .catch((error) => {
        console.error('Error:', error);
    });
}


render() {
    return (
      <div className="registrationContainer">
        <h3 className="display-4 text-center">Sign Up for Your Account</h3>
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