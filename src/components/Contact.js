import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Button from "react-bootstrap/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="vh-100">
      <Form className="w-25">
        <FormGroup className="mb-3">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="enter email" />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="enter password" />
        </FormGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
