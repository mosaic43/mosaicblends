import React, { Component } from 'react';
// import './Register.css';
// import { Link } from 'react-router-dom';
import { Form, Button, Col, } from "react-bootstrap";


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
            })
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

    fetch("http://localhost:9000/users/", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


render() {
    return (
      <div className="App">
        <header className="Intro-header">
          <div className="text">  

            <Form onSubmit={this.onSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>firstname</Form.Label>
                    <Form.Control type="text" name="firstname" onChange={this.handleChange} placeholder="Enter First Name"  />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>lastname</Form.Label>
                    <Form.Control type="text" name="lastname" onChange={this.handleChange} placeholder="Enter Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" onChange={this.handleChange} placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="text" name="password" onChange={this.handleChange} placeholder="password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
             </Form>

          </div>
        </header>
      </div>
    );
  }
}

  
export default Register;