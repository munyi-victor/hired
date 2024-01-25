import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Button from "react-bootstrap/esm/Button";

const Contact = () => {
  return (
    <div className="vh-90 p-5 bg-light" id="contact">
      <Form className="w-75 h-75 border border-2 border-dark p-5 rounded-3">
        <FormGroup className="mb-3">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="Enter email" />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="Enter password" />
        </FormGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
