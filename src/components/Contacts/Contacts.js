import React, { Component } from "react";
import s from "./Contacts.module.css";
import ContactsForm from "../ContactsForm/ContactsForm";

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
    const obj = {
      name: this.state.name,
      phone: this.state.phone,
    };
    this.props.getFormObject(obj);
    localStorage.setItem("contacts", JSON.stringify(obj));
  };
  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    this.setState((prev) => ({ counter: prev.counter + 10 }));
    this.setState((prev) => ({ counter: prev.counter + 10 }));
  };
  render() {
    console.log("props", this.props);
    console.log("state", this.state);
    const { handleClick, handleSubmit, handleChange } = this;

    const { myProps } = this.props;

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
            <ContactsForm />
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
