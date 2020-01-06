import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.accountLogin.bind(this);
        }


        handleChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;
            this.setState ({
                [name]: value
            });
        }

accountLogin(e) {

   e.preventDefault();
   var self = this;
    
    const data = { 
            username: self.state.username,
            password: self.state.password
    }
    
    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('http://localhost:9000/login',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('username', data.data)
    })
    .catch((error) => {
        console.log('Error:', error);
    });
}


render() {
    return (
      <div className="registrationContainer">
          <br />
        <h3 className="display-4 text-center">Login to Your Account</h3>
        <h3 className="email">Enter your email address and password to login.</h3>
        <br />
            <br />


            <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formGroupEmail" className="email">
                <Form.Control type="email" name="username" onChange={this.handleChange} placeholder="Enter email" />
            </Form.Group>
            <br />
            <Form.Group controlId="formGroupPassword" className="email">
                <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
      </div>
    );
  }
}

  
export default Login;