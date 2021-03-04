import React, { Component } from "react";
import s from "./Contacts.module.css";
import { Form, Button } from "react-bootstrap";
class Contacts extends React.Component {
  static defaultProps = {};
  state = {
    name: "",
    phone: "",
    email: "",
    show: false,
    counter: 0,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`submit`);
    // console.dir(e.target);
    // console.log("name: ", e.target.elements.name.value);
    // console.log("phone: ", e.target.elements.phone.value);
    // console.log("email: ", e.target.elements.email.value);
    // this.setState({
    //   name: e.target.elements.name.value,
    //   phone: e.target.elements.phone.value,
    //   email: e.target.elements.email.value,
    // });
    const obj = {
      name: this.state.name,
      phone: this.state.phone,
    };
    this.props.getFormObject(obj);
  };
  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    // console.log("before CLICK: ", this.state.show);
    // this.setState({ show: !this.state.show });
    // this.setState({ counter: this.state.counter + 10 });
    // this.setState({ counter: this.state.counter + 10 });

    this.setState((prev) => ({ counter: prev.counter + 10 }));
    this.setState((prev) => ({ counter: prev.counter + 10 }));

    // console.log("after CLICK: ", this.state.show);

    // this.setState((prevState) => ({ show: !prevState.show }));
    // console.log("after CLICK: ", this.state.show);
  };
  render() {
    console.log("props", this.props);
    console.log("state", this.state);
    const { handleClick, handleSubmit, handleChange } = this;

    const { myProps } = this.props;
    const {} = this.state;
    return (
      <section className={s.contacts}>
        <h2 className={s.title}>Contacts</h2>
        <p>{myProps}</p>
        <div className={s.wrapper}>
          <div className={s.contactsList}>
            <ul>
              <li>
                <a href="tel:">050 00 00 000</a>
              </li>
              <li>
                <a href="mail:">mail@gmail.com</a>
              </li>
            </ul>
            <button onClick={handleClick} className={s.btn}>
              click
            </button>
          </div>
          <div className={s.contactsForm}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="tel"
                  name="phone"
                  placeholder="phone"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {/* <form onSubmit={handleSubmit}>
              <label htmlFor="">
                name
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="name"
                  name="name"
                />
              </label>
              <label htmlFor="">
                phone
                <input
                  onChange={handleChange}
                  type="tel"
                  placeholder="phone"
                  name="phone"
                />
              </label>
              <label htmlFor="">
                email
                <input
                  onChange={handleChange}
                  type="mail"
                  placeholder="email"
                  name="email"
                />
              </label>
              <button type="submit">submit</button>
            </form> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
