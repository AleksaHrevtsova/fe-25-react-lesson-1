import React, { Component } from "react";
import s from "./ContactsForm.module.css";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import userAction from "../../redux/actions/createUser";
import addUserAction from "../../redux/actions/userAction";

class ContactsForm extends Component {
  state = {
    pass: "",
    email: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      email: this.state.email,
      pass: this.state.pass,
    };
    console.log(obj);
    this.props.z(obj);
    this.props.y(obj);
    localStorage.setItem("users", JSON.stringify(obj));
  };

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log("props", this.props);
    console.log("state", this.state);
    const { handleSubmit, handleChange } = this;

    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="tel"
              name="pass"
              placeholder="pass"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" className={s.btn}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}


const mapDispatchToProps = {
  z: userAction.createUser,
  y: addUserAction.addUser,
};

export default connect(null, mapDispatchToProps)(ContactsForm);
