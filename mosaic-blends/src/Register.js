import React, { Component } from 'react';
// import './Register.css';
import { Link } from 'react-router-dom';
import { Form, Button, Col, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

var submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', submitAccount);

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
}

createAccount() {
    fetch("http://localhost:9000/users/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

submitAccount(){
    var content = document.querySelector('textarea').value;
    if (content) {
        createAccount({
            description: 'Fetch API Post',
            public: true,
            files: {
                'Register.js' : {
                    content: content
                }
            }
        });
    } else {
        console.log('Failed');
    }
}


componentDidMount() {
    this.callAPI();
}

render() {
    return (
      <div className="App">
        <header className="Intro-header">
          <div className="text">  

            <Form onSubmit={this.callAPI}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>firstname</Form.Label>
                    <Form.Control type="firstname" value="firstname" placeholder="Enter First Name"  />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>lastname</Form.Label>
                    <Form.Control type="password" value="lastname" placeholder="lastname" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" value="password" placeholder="password" />
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button onClick={submitBtn} variant="primary" type="submit">
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